import { Component, OnInit, Input } from '@angular/core';
import { DiceComponent } from '../dice/dice.component'
import { MonsterComponent } from '../monster/monster.component';


@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  dices: DiceComponent[];
  roll: boolean;
  numberOfRoll: number;
  activeMonster: MonsterComponent;
  @Input() monsters: [MonsterComponent];
  @Input() ok: boolean;

  constructor() {
    this.roll = false;
    this.dices = [];

  }
  ngOnChanges(): void {


  }

  ngOnInit(): void {

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

  endTurn() {
    console.log("end of turn clicked and the number of rolls are: " + this.numberOfRoll)
    this.newTurn()
    console.log("and now is: " + this.numberOfRoll)
    this.applyResults();
  }

  applyResults() {
    const hit = this.dices.filter((dice) => dice.result === 4).length;
    const energy = this.dices.filter((dice) => dice.result === 5).length;
    const health = this.dices.filter((dice) => dice.result === 6).length;

    this.activeMonster.gainEnergy(energy)
    this.activeMonster.heal(health)

    this.calculateStars();

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
      console.log(`gana ${value} puntos por el ${i}`)
      if (value > 0) this.activeMonster
      // value = 0;
    }
  }

  newTurn() {
    this.numberOfRoll = 0;
    this.dices.map((dice) => dice.selected = false)
    this.rollDices()
  }
}
