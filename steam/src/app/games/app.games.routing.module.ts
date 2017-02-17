import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppGamesComponent }           from './app.games.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AppGamesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppGamesRoutingModule {}
