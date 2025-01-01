import {AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {IProduct} from '../../interfaces/products/ProductsInterface';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [
    MatPaginatorModule,
    MatSortModule,
    MatSortModule,
    MatTableModule,
    CommonModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements AfterViewInit, OnChanges {
  @Input() tableData!: IProduct;

  dataColumns: string[] = ['img', 'name', 'content'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnChanges(changes: SimpleChanges) {
    if(this.tableData?.reviews) {
      this.dataSource.data = this.tableData.reviews;
    }
  }

  ngAfterViewInit():void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  printRow(row: any) {
    console.log(row);
  }
}
