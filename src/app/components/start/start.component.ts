import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  @Output() goToGame = new EventEmitter();
  numberOfPlayers: number;

  constructor() {
    this.numberOfPlayers = 0;
  }

  ngOnInit(): void { }

  toGame() {
    this.goToGame.emit(this.numberOfPlayers);
  }
}
