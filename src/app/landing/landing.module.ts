import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent, SocialsComponent, NavComponent } from './index';



let list: any[] = [ CarouselComponent, SocialsComponent, NavComponent ];

@NgModule({
  imports: [ CommonModule ],
  declarations: [ list ],
  exports: [ list ]
})

export class landingModule {

}
