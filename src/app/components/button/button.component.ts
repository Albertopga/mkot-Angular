import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() id: string;
  @Input() text: string;
  @Input() spanClass: string;
  //@Input() disabled: string;

  ngOnInit(): void {

  }

}
