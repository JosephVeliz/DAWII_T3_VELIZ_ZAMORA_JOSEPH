import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Planetas</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-list>
          <mat-list-item *ngFor="let location of planetLocations">
            <h3 matListItemTitle>{{ location.name }}</h3>
            <p matListItemLine>Tipo: {{ location.type }}</p>
            <p matListItemLine>Dimensión: {{ location.dimension }}</p>
          </mat-list-item>
        </mat-list>
      </mat-card-content>
    </mat-card>
  `,
  styles: ['mat-card { margin: 30px; }']
})
export class LocationsComponent implements OnInit {
  planetLocations: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/location')
      .subscribe(response => {
        this.planetLocations = response.results.filter((location: any) => location.type === "Planet");
      });
  }
}