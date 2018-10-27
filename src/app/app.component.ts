import { Component } from '@angular/core';
import {Panel} from './models/panel.model';
import { Carousel } './models/carousel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  masterPanel: Panel[] = [
    new Panel("Women's Designer Clothing", "SHOP NOW", "womens-designer-clothing.jpg", "womans-designer-clothing");
    new Panel("Women's Designer Clothing", "SHOP NOW", "men-designer-shoes.jpg", "man-designer-shoes");
    new Panel("Grab & Go", "SHOP NOW", "cosmetics.jpg", "cosmetics");
  ]
}
