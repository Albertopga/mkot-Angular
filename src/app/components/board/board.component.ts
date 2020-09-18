import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MonsterComponent } from '../monster/monster.component';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() numMonsters: number;
  @Input() winner: MonsterComponent;
  @Output() moreBack = new EventEmitter();

  componente: string
  win: boolean;
  back: boolean;

  constructor() {
    this.win = false;
  }

  ngOnInit(): void {

  }
  takeMonsters($event: { monsters: any }) {
    this.winner = $event.monsters;
    this.win = true
  }

  takeBack($event: any) {
    this.back = $event.back;
    this.moreBack.emit(this.back)
  }
}
