import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { landingModule } from "./landing/landing.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    landingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
