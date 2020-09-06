import { Component, OnInit, Input } from '@angular/core';
import { Monster } from 'src/app/models/monster.model';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {

  public monsters: Monster[];

  @Input() numMonsters: number;

  constructor() {
    this.monsters = []
  }

  ngOnInit(): void {
    this.createMonsters()
  }

  createMonsters() {
    for (let i = 1; i <= this.numMonsters; i++) {
      this.monsters.push(new Monster("Monster " + i, "../../assets/images/avatares/def.png"))
    }
  }

}
