import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { FooterComponent }           from './footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent //required for it to be imported for other modules to use
  ]
})
export class FooterModule {}
