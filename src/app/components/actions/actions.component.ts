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

  @Input() nPlayers: number;
  @Output() objMonsters = new EventEmitter();

  numMonsters: number[];
  monsters: MonsterComponent[];
  dices: DiceComponent[];
  roll: boolean;
  numberOfRoll: number;
  activeMonster: MonsterComponent;
  contMonsters: number;
  inTokyo: any;
  notice: boolean;

  constructor() {
    this.roll = false;
    this.dices = [];
    this.numMonsters = [];
    this.monsters = [];
    this.contMonsters = 0;
    this.notice = false;
    this.numberOfRoll = 1;
    this.inTokyo = empty;
  }

  ngOnChanges(): void {

  }

  ngOnInit(): void {
    this.createMonsters();
  }

  createMonsters() {
    for (let i = 1; i <= this.nPlayers; i++) {
      this.numMonsters.push(i)
    }
  }

  takeMonster($event: { monster: MonsterComponent }) {
    if (this.contMonsters == 0) { $event.monster.activate = true, this.activeMonster = $event.monster }
    this.monsters.push($event.monster);
    this.contMonsters++;
  }

  takeDice($event: { dice: DiceComponent; }) {
    this.dices.push($event.dice)
  }

  rollDices() {
    if (this.numberOfRoll >= 3) {
      // send message "you can only roll dice three times"

    } else {
      this.numberOfRoll++;

      for (const dice of this.dices) {
        dice.roll()
      }
    }
  }

  newTurn() {
    this.numberOfRoll = 0;
    this.dices.map((dice) => dice.selected = false)
    this.nextMonster();
    this.rollDices()

  }

  endTurn() {
    this.applyResults();
    this.isWinner()
    this.newTurn()
  }

  isWinner() {
    if (this.monsters.length == 1) {
      this.objMonsters.emit({
        monsters: this.monsters
      });
    }
  }

  applyResults() {
    const hit = this.dices.filter((dice) => dice.result === 4).length;
    const energy = this.dices.filter((dice) => dice.result === 5).length;
    const health = this.dices.filter((dice) => dice.result === 6).length;

    this.activeMonster.gainEnergy(energy)
    if (this.activeMonster != this.inTokyo) { this.activeMonster.heal(health) }
    this.calculateStars();
    this.calculateDamage(hit);

    this.monsters = this.monsters.filter((monster) => !monster.dead)

  }

  calculateDamage(hit: number) {
    if (hit == 0) { return };
    this.enterTokyo()

    //if the active monster is in tokyo, it damages everyone else, otherwise it only damages the monster that is in tokyo
    if (this.activeMonster == this.inTokyo) {
      this.damageOthers(hit);
    } else {
      this.inTokyo.hurt(hit)
      if (this.inTokyo.dead) {
        this.inTokyo = this.activeMonster
      } else {
      }
    }
  }

  damageOthers(hit: number) {
    this.monsters.map((monster) => {
      if (monster.name != this.inTokyo.name) {
        monster.hurt(hit)
      }
    })
  }

  calculateStars() {
    let value = 0;
    for (let i = 1; i <= 3; i++) {
      const equalNumbers = this.dices.filter((dice) => dice.result === i).length;

      if (equalNumbers >= 3) {
        value = i;
        if (equalNumbers - 3 > 0) {
          value = value + (equalNumbers - 3);
        }
      }

      if (value > 0) {
        this.activeMonster.gainStars(value)
        value = 0;
      }
    }
  }

  nextMonster() {
    for (let index = 0; index < this.monsters.length; index++) {
      if (this.monsters[index].activate === true) {
        this.activeMonster.activate = false;
        if (index == this.monsters.length - 1) { this.activeMonster = this.monsters[0] }
        else { this.activeMonster = this.monsters[index + 1] }

        this.activeMonster.activate = true;
        break
      }
    }
  }

  enterTokyo() {
    if (this.inTokyo == empty) {
      this.assaultTokyo()
    } else {
      this.scapeFromTokyo();
    }
  }

  scapeFromTokyo() {
    if (this.inTokyo == this.activeMonster) { return }

    if (confirm(`${this.inTokyo.name}, ¿Aceptas abandonar Tokyo?`
    ) === true) {
      this.inTokyo.leaveTokyo();
      this.assaultTokyo()
    }
  }

  assaultTokyo() {
    this.inTokyo = this.activeMonster;
    this.activeMonster.enterTokyo();
  }

}
