import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageNotFoundComponent } from './app.not-found.component';

const appRoutes: Routes = [
  //<router-outlet></router-outlet>
  //<li><a routerLink="/" routerLinkActive="active">Home</a></li>
  // <li><a routerLink="/games" routerLinkActive="active">Games</a></li>
  // <li><a routerLink="/foo" routerLinkActive="active">Not Found</a></li>
  /*{
    path: 'games',
    loadChildren: 'app/games/app.games.module#AppGamesModule'
  }, */{
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
