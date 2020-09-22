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
  isActivate: boolean;
  inTokyo: boolean;
  inTokyoBay: boolean;
  dead: boolean;
  winner: boolean;

  constructor() {
    this.name = "Monster default";
    this.image = Globals.imagePath
    this.health = Globals.maxHealth;
    this.energy = 0;
    this.victory = 0;
    this.isActivate = false;
    this.dead = false;
    this.winner = false;
    this.inTokyo = false;
    this.inTokyoBay = false;
  }

  ngOnInit(): void {
    this.name = `Monster ${this.index}`;
    this.image += this.index + ".jpg";

    this.objMonster.emit({
      monster: this
    });
  }

  heal(pointsWin: number) {
    if (this.inTokyo || this.inTokyoBay) { return }

    const resultingHealth = this.health + pointsWin;
    this.health = resultingHealth <= Globals.maxHealth ? resultingHealth : Globals.maxHealth;
  }

  hurt(pointsLost: number) {
    const resultingHealth = this.health - pointsLost;
    this.health = resultingHealth > 0 ? resultingHealth : 0;
    this.isDead();
  }

  isDead() {
    if (this.health <= 0) {
      this.dead = true;
      this.inTokyo = false;
    }
  }

  gainStars(stars: number) {
    this.victory += stars
  }

  isWinner() {
    if (this.victory >= Globals.victory) {
      this.winner = true
    }
  }

  lostStars(stars: number) {
    const res = this.victory -= stars
    this.victory = res < 0 ? res : 0
  }

  gainEnergy(energy: number) {
    this.energy += energy
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

  activate() {
    this.isActivate = true;
  }

  deActivate() {
    this.isActivate = false;
  }
}