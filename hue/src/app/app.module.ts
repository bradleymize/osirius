import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.module";
import { PageNotFoundComponent } from './app.not-found.component';
import {NavbarModule} from "../common/components/navbar/navbar.module";
import {FooterModule} from "../common/components/footer/footer.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    FooterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
