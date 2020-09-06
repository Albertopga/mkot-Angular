import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  image: string;
  result: number;
  selected: boolean;

  @Output() objDice = new EventEmitter();

  constructor() {
    this.roll();
    this.selected = false;
  }

  ngOnInit(): void {
    this.objDice.emit({
      dice: this
    });
  }

  ngOnChanges() {
  }


  roll() {
    if (!this.selected) {
      this.result = Math.floor(Math.random() * 6) + 1;
      this.image = this.setDiceImage(this.result);
    }
  }

  select() {
    this.selected = !this.selected
  }

  private setDiceImage(resultado) {
    switch (resultado) {
      case 1:
        return "/../assets/images/dices/dice1.jpg";
      case 2:
        return "/../assets/images/dices/dice2.jpg";
      case 3:
        return "/../assets/images/dices/dice3.jpg";
      case 4:
        return "/../assets/images/dices/diceAttack.jpg";
      case 5:
        return "/../assets/images/dices/diceEnergy.jpg";
      case 6:
        return "/../assets/images/dices/diceHealth.jpg";
      default:
        return "";
    }
  }
}
