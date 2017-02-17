import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AppGamesComponent }           from './app.games.component';
import { AppGamesRoutingModule }       from './app.games.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppGamesRoutingModule
  ],
  declarations: [
    AppGamesComponent
  ]
})
export class AppGamesModule {}
