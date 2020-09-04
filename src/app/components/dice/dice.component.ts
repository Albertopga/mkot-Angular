import { Component, OnInit } from '@angular/core';
import { Dice } from '../../models/dice.model'

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  dice: Dice

  constructor() { }

  ngOnInit(): void {
  }

}
