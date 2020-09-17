import { Component, OnInit, Input } from '@angular/core';
import { MonsterComponent } from '../monster/monster.component';
import { empty } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() numMonsters: number;
  @Input() winner: MonsterComponent;

  componente: string
  win: boolean;

  constructor() {
    this.win = false;
  }

  ngOnInit(): void {

  }
  takeMonsters($event: { monsters: any }) {
    if ($event.monsters.length == 1) {
      this.winner = $event.monsters
      console.log(this.winner)
      this.win = true
    }
  }
}
