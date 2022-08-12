import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Lib1Module } from '@lib/lib1';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Lib1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
