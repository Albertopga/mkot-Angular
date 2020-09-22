import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  @Input() numberOfPlayers: number;

  constructor() {
    this.numberOfPlayers = 0;
  }

  ngOnInit(): void {
  }

  selectedPlayers(numberOfPlayersSelected: number) {
    this.numberOfPlayers = numberOfPlayersSelected;
  }

  takeBack($event: any) {
    this.numberOfPlayers = 0;
  }

}
