import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent, SocialsComponent, NavComponent, HeroComponent } from './index';


let list: any[] = [ CarouselComponent, SocialsComponent, NavComponent, HeroComponent ];

@NgModule({
  imports: [ CommonModule ],
  declarations: [ list, HeroComponent ],
  exports: [ list ]
})

export class landingModule {

}
