import { MatPaginator } from '@angular/material/paginator';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Conversion } from 'src/app/models/conversion';

@Component({
  selector: 'app-conversor-history',
  templateUrl: './conversor-history.component.html',
  styleUrls: ['./conversor-history.component.css']
})
export class ConversorHistoryComponent implements OnInit, AfterViewInit {

  columnsToDisplay: string[] = ['date', 'hour', 'value', 'from', 'result', 'to', 'rate'];
  dataSource!: MatTableDataSource<Conversion>
  conversions: Conversion[] = []

  constructor() { }

  @ViewChild(MatSort) sort!: MatSort
  @ViewChild(MatPaginator) paginator!: MatPaginator

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.conversions = JSON.parse(sessionStorage.getItem('conversions') as string)
    this.dataSource = new MatTableDataSource(this.conversions)
  }

}
