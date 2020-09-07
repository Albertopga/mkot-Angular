import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  nPlayers: number;
  arrCrateNames: [number]
  @Output() goToGame = new EventEmitter();


  constructor() {
    this.nPlayers = 0;
  }

  ngOnInit(): void {
  }

  toGame() {
    this.goToGame.emit(this.nPlayers)
  }

  crateInputs() {
    for (let i = 0; i < this.nPlayers; i++) {
      this.arrCrateNames.push(i);
    }
  }

  takeData() {

  }


}
