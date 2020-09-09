import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DiceComponent } from '../dice/dice.component'
import { Monster } from 'src/app/models/monster.model';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  dices: DiceComponent[];
  roll: boolean;
  numberOfRoll: number;
  activeMonster: Monster;
  @Input() monsters: [Monster];

  constructor() {
    this.roll = false;
    this.dices = [];

  }

  ngOnInit(): void {
    this.activeMonster = this.monsters.filter((monster) => monster.activate)[0]
    this.newTurn()
  }

  takeDice($event: { dice: DiceComponent; }) {
    this.dices.push($event.dice)
  }

  rollDices() {
    console.log("heyyy")
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

  }

  newTurn() {
    this.numberOfRoll = 0;
    this.dices.map((dice) => dice.selected = false)
    this.rollDices()
  }
}
