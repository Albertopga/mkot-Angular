import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MonsterComponent } from '../monster/monster.component';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {

  monsters: MonsterComponent[];
  nMonsters: number[]
  ok: boolean;
  private contMonsters = 1;
  @Input() numMonsters: number;
  @Output() objMonsters = new EventEmitter();

  constructor() {
    this.monsters = [];
    this.nMonsters = [];
    this.ok = false;
  }

  ngOnInit(): void {
    this.createMonsters()
  }

  createMonsters() {
    for (let i = 1; i <= this.numMonsters; i++) {
      this.nMonsters.push(i)
    }
  }

  takeMonster($event: { monster: MonsterComponent }) {

    const tempMonster = $event.monster
    tempMonster.name = "Monster " + this.contMonsters
    tempMonster.image = `../../../assets/images/avatares/${this.contMonsters}.jpg`
    this.monsters.push(tempMonster)

    if (this.contMonsters == this.numMonsters) { return }

    this.contMonsters++
  }

}
