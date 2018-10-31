import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { LogoComponent } from './logo/logo.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { ImgLinkComponent } from './img-link/img-link.component';
import { SquarePanelComponent } from './square-panel/square-panel.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CartComponent } from './cart/cart.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    LogoComponent,
    BottomNavbarComponent,
    ImgLinkComponent,
    SquarePanelComponent,
    CarouselComponent,
    CartComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
