import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageNotFoundComponent } from './app.not-found.component';

// import { AppGamesComponent }   from './games/app.games.component';
// import { AppHomeComponent }     from './home/app.home.component';

const appRoutes: Routes = [
  {
    path: 'games',
    loadChildren: 'app/games/app.games.module#AppGamesModule'
  }, {
    path: '',
    pathMatch: 'full',
    loadChildren: 'app/home/app.home.module#AppHomeModule'
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
