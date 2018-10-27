import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { LogoComponent } from './logo/logo.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { ImgLinkComponent } from './img-link/img-link.component';
import { SquarePanelComponent } from './square-panel/square-panel.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    LogoComponent,
    BottomNavbarComponent,
    ImgLinkComponent,
    SquarePanelComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
