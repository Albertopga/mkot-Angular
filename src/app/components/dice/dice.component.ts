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
  @Input() extra: boolean;

  @Output() objDice = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
    this.roll();
    this.selected = false;
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
        return !this.extra ? "/../assets/images/dices/dice1.jpg" :
          "/../assets/images/dices/extdice1.jpg";
      case 2:
        return !this.extra ? "/../assets/images/dices/dice2.jpg" :
          "/../assets/images/dices/extdice2.jpg";
      case 3:
        return !this.extra ? "/../assets/images/dices/dice3.jpg" :
          "/../assets/images/dices/extdice3.jpg";
      case 4:
        return !this.extra ? "/../assets/images/dices/diceAttack.jpg" :
          "/../assets/images/dices/extdiceAttack.jpg";
      case 5:
        return !this.extra ? "/../assets/images/dices/diceEnergy.jpg" :
          "/../assets/images/dices/extdiceEnergy.jpg";
      case 6:
        return !this.extra ? "/../assets/images/dices/diceHealth.jpg" :
          "/../assets/images/dices/extdiceHealth.jpg";
      default:
        return "";
    }
  }
}
