import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent, SocialsComponent, NavComponent, HeroComponent, AccordionComponent, FriendsComponent, WeatherComponent } from './index';


let list: any[] = [ CarouselComponent, SocialsComponent, NavComponent, HeroComponent, AccordionComponent, FriendsComponent, WeatherComponent ];

@NgModule({
  imports: [ CommonModule ],
  declarations: [ list ],
  exports: [ list ]
})

export class landingModule {

}
