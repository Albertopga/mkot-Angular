import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Globals } from '../../../globals'

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {

  @Output() objMonster = new EventEmitter();
  @Input() index: number
  name: string;
  image: string;
  health: number;
  energy: number;
  victory: number;
  activate: boolean;
  inTokyo: boolean;
  inTokyoBay: boolean;
  dead: boolean;
  winner: boolean;

  constructor() {
    this.name = "Monster default";
    this.image = Globals.imgDefault;
    this.health = Globals.maxHealth;
    this.energy = 0;
    this.victory = 0;
    this.activate = false;
    this.dead = false;
    this.winner = false;
    this.inTokyo = false;
    this.inTokyoBay = false;

  }

  ngOnInit(): void {
    this.name = `Monster ${this.index}`;
    this.image = `../../../assets/images/avatares/${this.index}.jpg`;
    this.objMonster.emit({
      monster: this
    });
  }

  heal(recovered_health: number) {
    // it not possible recover more points health than the maxHealth value
    const res = this.health + recovered_health;
    this.health = res <= Globals.maxHealth ? res : Globals.maxHealth;
  }

  hurt(lost_health: number) {
    const res = this.health - lost_health;
    this.health = res > 0 ? res : 0;
    if (this.health <= 0) { this.dead = true; }
  }

  gainStars(stars: number) {
    this.victory += stars
    if (this.victory >= Globals.victory) { this.winner = true }
  }

  lostStars(stars: number) {
    const res = this.victory -= stars
    this.victory = res < 0 ? res : 0
  }

  gainEnergy(energy: number) {
    this.energy += energy
  }

  // when I implement the cards, make sure this function does what I expect
  lostEnergy(energy: number) {
    const res = this.energy -= energy
    this.energy = res > 0 ? res : 0
  }

  enterTokyo() {
    this.inTokyo = true;
  }

  leaveTokyo() {
    this.inTokyo = false;
  }

  enterTokyoBay() {
    this.inTokyoBay = true;
  }

  leaveTokyoBay() {
    this.inTokyoBay = false;
  }
}