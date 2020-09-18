import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  @Input() messages: [];
  constructor() { this.messages = []; }

  ngOnInit(): void {
  }

}
