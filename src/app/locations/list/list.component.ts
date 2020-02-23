import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import {ApiService} from '../../core/api.service';

interface Location {
  id: number;
  name: string;
  administrativeDivision: string;
}

interface Error {
  error: string;
}

@Component({
  selector: 'app-list',
  styleUrls: ['./list.component.css'],
  templateUrl: './list.component.html'

})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['addFavorite', 'id', 'name', 'administrativeDivision', 'view'];
  locations: MatTableDataSource<Location | Location[]>;
  error: Error;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private api: ApiService
  ) {
  }

  ngOnInit() {
    this.api.get('/api/locations').subscribe((data: Location[]) => {
      this.locations = new MatTableDataSource(data);
      this.locations.paginator = this.paginator;
      this.locations.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.locations.filter = filterValue.trim().toLowerCase();

    if (this.locations.paginator) {
      this.locations.paginator.firstPage();
    }
  }

  saveToFavorites(id) {
    this.api.post('/api/locations/favorites', id).subscribe((error: Error) => {
      this.error = error;
      if (!error.error.match('OK')) {
        alert(error.error);
      } else {
        alert('Favorite added.');
      }
    });
  }
}
