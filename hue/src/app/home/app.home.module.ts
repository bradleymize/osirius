import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppHomeComponent }     from './app.home.component';
import { AppHomeRoutingModule } from "./app.home.routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppHomeRoutingModule
  ],
  declarations: [
    AppHomeComponent
  ]
})
export class AppHomeModule {}
