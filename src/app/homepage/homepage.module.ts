import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageRoutingModule} from './homepage-routing.module';
import {CardsComponent} from './cards/cards.component';
import {ViewComponent} from './view/view.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    CardsComponent,
    ViewComponent,
    FavoritesComponent
  ],
    imports: [
        CommonModule,
        HomepageRoutingModule,
        MatTableModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule
    ]
})
export class HomepageModule { }
