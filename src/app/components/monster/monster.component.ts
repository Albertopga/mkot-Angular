import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Globals } from '../../../globals'

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {

  @Output() objMonster = new EventEmitter();
  name: string;
  image: string;
  health: number;
  energy: number;
  victory: number;
  activate: boolean;
  inTokyo: boolean;
  dead: boolean;
  winner: boolean;

  constructor() {
    this.name = "Monstruo ";
    this.image = Globals.imgDefault;
    this.health = 10;
    this.energy = 0;
    this.victory = 0;
    this.activate = false;
    this.inTokyo = false;
    this.dead = false;
    this.winner = false;
  }

  ngOnInit(): void {

    this.objMonster.emit({
      monster: this
    });
  }

  heal(recovered_health: number) {
    // If the monsters are in Tokyo, they can't be cured
    if (this.monster.inTokyo) { return false } // provisional return

    // it not possible recover more points health than the maxHealth value
    const res = this.monster.health + recovered_health;
    this.monster.health = res <= Globals.maxHealth ? res : Globals.maxHealth;
  }

  hurt(lost_health: number) {
    const res = this.monster.health - lost_health;
    this.monster.health = res > 0 ? res : 0;
    if (this.monster.health <= 0) { this.monster.dead = true; }
  }

  gainStars(stars: number) {
    this.monster.victory += stars
    if (this.monster.victory >= Globals.victory) { this.monster.winner = true }
  }

  lostStars(stars: number) {
    const res = this.monster.victory -= stars
    this.monster.victory = res < 0 ? res : 0
  }

  gainEnergy(energy: number) {
    this.monster.victory += energy
  }

  // when I implement the cards make sure this function does what I expect
  lostEnergy(energy: number) {
    const res = this.monster.energy -= energy
    this.monster.energy = res > 0 ? res : 0
  }

  enterTokyo() {
    this.monster.inTokyo = true;
  }

  leaveTokyo() {
    this.monster.inTokyo = false;
  }
}