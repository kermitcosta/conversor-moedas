import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

import { Conversion } from './../../models/conversion';

@Component({
  selector: 'app-conversor-page',
  templateUrl: './conversor-page.component.html',
  styleUrls: ['./conversor-page.component.css']
})
export class ConversorPageComponent {

  matLabel: string = 'CONVERSOR'

  conversions: Conversion[] = []

  constructor() { }

  tabChanged(event: MatTabChangeEvent) {
    this.matLabel = event.tab.textLabel.toUpperCase()
  }

}
