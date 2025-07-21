import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aplicacion-list',
  templateUrl: './aplicacion-list.component.html'
})
export class AplicacionListComponent implements OnInit {
  aplicaciones: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/aplicacion').subscribe(data => {
      this.aplicaciones = data;
    });
  }
}