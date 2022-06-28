import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-large',
  templateUrl: './button-large.component.html',
  styleUrls: ['./button-large.component.css']
})
export class ButtonLargeComponent {

  @Input() nomeBotao: string = ''
  @Input() classes: string[] = []

}
