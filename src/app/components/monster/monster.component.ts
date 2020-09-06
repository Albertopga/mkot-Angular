import { Component, OnInit, Input } from '@angular/core';
import { Monster } from '../../models/monster.model'


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
    console.log(this.monster)
  }

}
