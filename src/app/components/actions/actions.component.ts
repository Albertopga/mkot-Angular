import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DiceComponent } from '../dice/dice.component'

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  dices: DiceComponent[];
  roll: boolean;

  constructor() {
    this.roll = false;
    this.dices = []
  }

  ngOnInit(): void {
  }

  rollDices() {
    for (const dice of this.dices) {
      dice.roll()
    }
  }

  takeDIce($event) {
    this.dices.push($event.dice)
  }
}
