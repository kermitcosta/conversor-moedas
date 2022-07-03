import { ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Conversion } from 'src/app/models/conversion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-conversor-history',
  templateUrl: './conversor-history.component.html',
  styleUrls: ['./conversor-history.component.css']
})
export class ConversorHistoryComponent implements OnInit, AfterViewInit {

  columnsToDisplay: string[] = ['date', 'hour', 'value', 'from', 'result', 'to', 'rate', 'action'];
  dataSource!: MatTableDataSource<Conversion>
  conversions: Conversion[] = []

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) { }

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

  openDialog(target: Conversion): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent)

    dialogRef.afterClosed().subscribe(res => {
      if (res === true) {
        this.deleteData(target)
      }
    })
  }

  private deleteData(target: Conversion): void {
    let newDataSource = this.dataSource.data.filter(conversao => conversao != target)
    this.conversions = newDataSource
    this.dataSource.data = newDataSource
    if (newDataSource.length == 0) {
      sessionStorage.removeItem('conversions')
    } else {
      sessionStorage.setItem('conversions', JSON.stringify(newDataSource))
    }
    this.snackBar.open('Conversão Apagada', '', { duration: 2500, panelClass: ['blue-snackbar'] })
  }

}
