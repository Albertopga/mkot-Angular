import { Component, OnInit, Input } from '@angular/core';
import { DiceComponent } from '../dice/dice.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() numMonsters: number;
  componente: string

  constructor() {
    this.componente = "<app-dice></app-dice>"
  }

  ngOnInit(): void {

  }

}
