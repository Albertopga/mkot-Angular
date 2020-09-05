import { Component, OnInit, Input } from '@angular/core';
import { DiceComponent } from '../dice/dice.component'

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  // @Input() rollDices
  dices: DiceComponent[];


  constructor() {
    this.dices = [
      new DiceComponent(),
      new DiceComponent(),
      new DiceComponent(),
      new DiceComponent(),
      new DiceComponent(),
      new DiceComponent()
    ]
  }

  ngOnInit(): void {
  }

}
