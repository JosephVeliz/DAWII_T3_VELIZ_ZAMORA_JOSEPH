import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>TAREAS COMPLETADAS (ID 25 - 90)</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-list>
          <mat-list-item *ngFor="let todo of filteredTodos">
            <h3 matListItemTitle>ID: {{ todo.id }}</h3>
            <p matListItemLine>{{ todo.title }}</p>
          </mat-list-item>
        </mat-list>
      </mat-card-content>
    </mat-card>
  `,
  styles: ['mat-card { margin: 20px; }']
})
export class TodosComponent implements OnInit {
  filteredTodos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe(todos => {
        this.filteredTodos = todos.filter(todo => 
          todo.id >= 25 && todo.id <= 90 && todo.completed === true
        );
      });
  }
}