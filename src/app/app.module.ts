import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
