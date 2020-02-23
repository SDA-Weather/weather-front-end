import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { ActivatedRoute } from '@angular/router';

export interface LocationWeatherData {
  location: Location;
  weatherData: WeatherData;
}

export interface Location {
  id: number;
  name: string;
  administrativeDivision: string;
  country: string;
}

export interface WeatherData {
  forecastTimeUtc: string;
  conditionCode: string;
  airTemperature: string;
  windSpeed: string;
  windGust: string;
  windDirection: string;
  cloudCover: string;
  seaLevelPressure: string;
  totalPrecipitation: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  displayedColumns: string[] = [
    'forecastTimeUtc',
    'conditionCode',
    'airTemperature',
    'windSpeed',
    'windGust',
    'windDirection',
    'cloudCover',
    'seaLevelPressure',
    'totalPrecipitation'
  ];

  private locationWeatherData: LocationWeatherData;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.get('/api/locations/' + id).subscribe((result: LocationWeatherData) => this.locationWeatherData = result);
  }

}
