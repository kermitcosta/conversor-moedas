import { Component } from '@angular/core';

import { Conversion } from './../../models/conversion';

@Component({
  selector: 'app-conversor-page',
  templateUrl: './conversor-page.component.html',
  styleUrls: ['./conversor-page.component.css']
})
export class ConversorPageComponent {

  conversions: Conversion[] = []

  constructor() { }

}
