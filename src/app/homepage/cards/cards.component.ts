import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { Router } from '@angular/router';

interface Card {
  id: number;
  name: string;
  airTemperature: number;
  conditionCode: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  biggestTowns: string[] = ['vilnius', 'kaunas', 'klaipeda', 'siauliai', 'panevezys'];
  homepageCards: Card[] = [];


  constructor(
    private api: ApiService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.api.get('/api/locations/current/' + this.biggestTowns)
      .subscribe((result: Card[]) => this.homepageCards = result);
  }

  viewDetails(id: number) {
    this.router.navigate(['/locations/' + id]);
  }
}
