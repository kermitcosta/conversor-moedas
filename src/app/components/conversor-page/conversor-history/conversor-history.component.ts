import { Component, Input, OnInit } from '@angular/core';
import { Conversion } from 'src/app/models/conversion';

@Component({
  selector: 'app-conversor-history',
  templateUrl: './conversor-history.component.html',
  styleUrls: ['./conversor-history.component.css']
})
export class ConversorHistoryComponent implements OnInit {

  @Input() conversions: Conversion[] = []

  constructor() { }

  ngOnInit(): void {
    this.conversions = JSON.parse(sessionStorage.getItem('conversions') as string)
  }

}
