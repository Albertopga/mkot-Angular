import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {



  @Input() numPlayers: number;

  constructor() {
    this.numPlayers = 1;
  }

  ngOnInit(): void {
  }

  selectedPlayers(numPlayersSelected) {
    this.numPlayers = numPlayersSelected
  }

}
