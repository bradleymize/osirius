import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppHomeComponent }           from './app.home.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AppHomeComponent
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
export class AppHomeRoutingModule {}
