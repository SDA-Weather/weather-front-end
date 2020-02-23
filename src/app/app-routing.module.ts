import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'homepage',
    loadChildren: () =>
      import('./homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./locations/locations.module').then(m => m.LocationsModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
