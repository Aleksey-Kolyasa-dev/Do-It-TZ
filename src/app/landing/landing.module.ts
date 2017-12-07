import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CarouselComponent,
  SocialsComponent,
  NavComponent,
  HeroComponent,
  AccordionComponent,
  FriendsComponent,
  WeatherComponent,
  CalendarComponent,
  SliderComponent,
  DropdownComponent
} from './index';


let list: any[] = [
  CarouselComponent,
  SocialsComponent,
  NavComponent,
  HeroComponent,
  AccordionComponent,
  FriendsComponent,
  WeatherComponent,
  CalendarComponent,
  SliderComponent,
  DropdownComponent
];

@NgModule({
  imports: [ CommonModule ],
  declarations: [ list, DropdownComponent ],
  exports: [ list ]
})

export class landingModule {

}
