import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  playersSelected: boolean;
  @Input() numPlayers: number;

  constructor() {
    this.numPlayers = 0;
  }

  ngOnInit(): void {

  }

  selectedPlayers(numPlayersSelected) {
    this.numPlayers = numPlayersSelected
  }

}
