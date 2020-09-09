import { Component, OnInit, Input } from '@angular/core';
import { Monster } from '../../models/monster.model'
import { Globals } from '../../../globals'

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {

  @Input() monster: Monster;


  constructor() {
  }

  ngOnInit(): void {
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