import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {ApiService} from '../../core/api.service';
import { Router } from '@angular/router';

interface FavLocation {
  id: number;
  name: string;
  airTemperature: number;
  windSpeed: number;
  totalPrecipitation: number;
  conditionCode: string;
}

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  displayedColumns: string[] = ['no',	'locationName',	'conditionCode', 'temperature',	'windSpeed',	'totalPrecipitation', 'actions'];
  favoriteLocations: FavLocation[] = [];

  constructor(
    public authService: AuthService,
    private api: ApiService
  ) {
  }

  ngOnInit() {
    this.api.get('/api/locations/favorites').subscribe((data: FavLocation[]) => {
      this.favoriteLocations = data;
    });
  }

  delete(id: number) {
    this.api.delete(`/api/locations/favorites/${id}`).subscribe(
      () => {
        this.favoriteLocations = this.favoriteLocations.filter(item => item.id !== id);
        this.ngOnInit();
      }
    );
  }
}
