import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LibButtonModule } from '@style-lib'

import { ButtonModule } from './button/button.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    LibButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
