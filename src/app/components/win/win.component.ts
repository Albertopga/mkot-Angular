import { Component, OnInit, Input } from '@angular/core';
import { MonsterComponent } from '../monster/monster.component';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.css']
})
export class WinComponent implements OnInit {

  @Input() winner: MonsterComponent

  constructor() {
  }

  ngOnInit(): void {
  }

}
