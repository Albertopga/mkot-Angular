import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DiceComponent } from '../dice/dice.component'
import { MonsterComponent } from '../monster/monster.component';
import { empty } from 'rxjs';


@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  @Input() numberOfMonsters: any;
  @Output() objMonsters = new EventEmitter();
  @Output() back = new EventEmitter();

  toCreateMonstersComponent: number[];
  monsters: MonsterComponent[];
  dices: DiceComponent[];
  numberOfRoll: number;
  activeMonster: MonsterComponent;
  inTokyo: any;
  notice: boolean;
  messages: string[];
  extra1: boolean;
  extra2: boolean;

  constructor() {
    this.dices = [];
    this.monsters = [];
    this.notice = false;
    this.numberOfRoll = 1;
    this.inTokyo = empty;
    this.messages = [];
    this.extra1 = false;
    this.extra2 = false;
  }

  ngOnInit(): void {
    this.toCreateMonstersComponent = new Array(parseInt(this.numberOfMonsters));
  }

  takeMonstersSetFirst($event: { monster: MonsterComponent }) {
    const tempMonster = $event.monster;
    this.monsters.push(tempMonster);

    if (this.monsters.length == 1) { this.setFirst() }
  }

  takeDice($event: { dice: DiceComponent; }) {
    this.dices.push($event.dice)
  }

  setFirst() {
    this.activeMonster = this.monsters[0];
    this.activeMonster.activate();
  }

  rollDices() {
    this.numberOfRoll++;
    this.dices.map((dice) => dice.roll())
  }

  newTurn() {
    this.numberOfRoll = 0;
    this.dices.map((dice) => dice.unselect())
    this.nextMonster();
    this.continueInTokyo();
    this.rollDices();
  }

  continueInTokyo() {
    if (this.activeMonster.inTokyo) {
      this.activeMonster.gainStars(2);
      this.activeMonster.isWinner();
    }
  }

  isWinner() {
    if (this.monsters.length == 1 || this.activeMonster.winner) {
      this.objMonsters.emit({ monsters: this.activeMonster });
    }
  }

  applyResults() {
    const hit = this.dices.filter((dice) => dice.result === 4).length;
    const energy = this.dices.filter((dice) => dice.result === 5).length;
    const health = this.dices.filter((dice) => dice.result === 6).length;

    this.activeMonster.heal(health);
    this.activeMonster.gainEnergy(energy)
    this.gainStars();
    this.applyDamageAndEnterTokyo(hit);
    this.removeEliminatedMonsters()
  }

  removeEliminatedMonsters() {
    this.monsters = this.monsters.filter((monster) => !monster.dead)
  }

  applyDamageAndEnterTokyo(hit: number) {
    if (hit == 0) { return };
    if (this.inTokyo == empty) { this.assaultTokyo(); return };

    this.applyHits(hit);
    this.enterInTokyo();
  }

  applyHits(hit: number) {
    if (this.activeMonster.inTokyo) {
      this.damageOthers(hit);
    } else {
      this.inTokyo.hurt(hit)
    }
  }

  damageOthers(hit: number) {
    this.monsters.map((monster) => {
      if (!monster.inTokyo) { monster.hurt(hit) }
    })
  }

  enterInTokyo() {
    if (this.inTokyo == this.activeMonster) { return }
    if (this.inTokyo.dead) { this.assaultTokyo(); return }
    this.stayOrRunAway();
  }

  stayOrRunAway() {
    if (confirm(`${this.inTokyo.name}, ¿Abandonar Tokyo o te quedas?`
    ) === true) {
      this.inTokyo.leaveTokyo();
      this.assaultTokyo()
    }
  }

  assaultTokyo() {
    this.inTokyo = this.activeMonster;
    this.activeMonster.enterTokyo();
    this.activeMonster.gainStars(1);
    this.activeMonster.isWinner();
  }

  gainStars() {
    for (let value = 1; value <= 3; value++) {
      const equalNumbers = this.dices.filter((dice) => dice.result === value).length;
      const starsCalculated = this.calculateStars(equalNumbers, value);

      this.activeMonster.gainStars(starsCalculated)
    }

    this.activeMonster.isWinner();
  }

  calculateStars(equalNumbers: number, value: number): number {
    let starsToAdd = 0;

    if (equalNumbers >= 3) {
      starsToAdd = value;
      if (equalNumbers - 3 > 0) {
        starsToAdd = starsToAdd + (equalNumbers - 3);
      }
    }
    return starsToAdd
  }

  nextMonster() {
    let lastPosition = this.monsters.length - 1;

    for (let index = 0; index < this.monsters.length; index++) {
      if (this.monsters[index].isActivate) {
        this.activeMonster.deActivate();
        this.assignActivemonster(index, lastPosition);
        this.activeMonster.activate();
        break
      }
    }
  }

  endTurn() {
    this.applyResults();
    this.isWinner()
    this.newTurn()
    this.isWinner()
  }

  assignActivemonster(index: number, lastPosition: number) {
    if (index == lastPosition) {
      this.activeMonster = this.monsters[0]
    } else {
      this.activeMonster = this.monsters[index + 1]
    }
  }

  sendBack(): void {
    this.back.emit({
      back: true
    })
  }

  log(message: string) {
    this.messages.push(message)
  }

}
