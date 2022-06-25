import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-large',
  templateUrl: './button-large.component.html',
  styleUrls: ['./button-large.component.css']
})
export class ButtonLargeComponent implements OnInit {

  @Input() nomeBotao: string = ''
  @Input() classes: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
