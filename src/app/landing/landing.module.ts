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
  DropdownComponent,
  TxtpanelComponent,
  FormComponent
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
  DropdownComponent,
  TxtpanelComponent,
  FormComponent
];

@NgModule({
  imports: [ CommonModule ],
  declarations: [ list, DropdownComponent, TxtpanelComponent, FormComponent ],
  exports: [ list ]
})

export class landingModule {

}
