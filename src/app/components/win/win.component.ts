import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MonsterComponent } from '../monster/monster.component';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.css']
})
export class WinComponent implements OnInit {

  @Input() winner: MonsterComponent
  @Output() back = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  sendBack(): void {
    this.back.emit({
      back: true
    })
  }
}
