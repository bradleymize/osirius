import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { NavbarComponent }           from './navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent //required for it to be a part of this module
  ],
  exports: [
    NavbarComponent //required for it to be imported for other modules to use
  ]
})
export class NavbarModule {}
