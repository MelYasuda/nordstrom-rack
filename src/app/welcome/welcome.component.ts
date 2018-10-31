import { Component, OnInit, Input } from '@angular/core';
import { Panel } from '../models/panel.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  // @Input() parentPanel: Panel[];

  masterPanel: Panel[] = [
    new Panel("Women's Designer Clothing", "SHOP NOW", "womens-designer-clothing.jpg", "womans-designer-clothing"),
    new Panel("Women's Designer Clothing", "SHOP NOW", "men-designer-shoes.jpg", "man-designer-shoes"),
    new Panel("Grab & Go", "SHOP NOW", "cosmetics.jpg", "cosmetics")
  ]

  constructor() { }

  ngOnInit() {
  }

}
