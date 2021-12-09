import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  columnDefs: ColDefs = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Gender', field: 'gender' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Status', field: 'status' },
  ];

  rowData: Observable<any[]>;
  constructor(private http: HttpClient) {
    this.rowData = this.http.get<any[]>('https://gorest.co.in/public/v1/users');
  }
}
