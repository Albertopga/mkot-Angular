import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  nPlayers: number;
  @Output() goToGame = new EventEmitter();

  constructor() {
    this.nPlayers = 0;
  }

  ngOnInit(): void {
  }

  toGame() {
    this.goToGame.emit(this.nPlayers)
  }

}
