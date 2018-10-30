import { Component, OnInit, Input } from '@angular/core';
import { Panel } from '../models/panel.model';
import { Carousel } from '../models/carousel.model';

@Component({
  selector: 'app-square-panel',
  templateUrl: './square-panel.component.html',
  styleUrls: ['./square-panel.component.css']
})
export class SquarePanelComponent implements OnInit {

  @Input() childPanelList: Panel[];

  masterCarousel: Carousel[] = [
    new Carousel("party-shop.jpg", "Second slide"),
    new Carousel("nordy-club.gif", "Third slide"),
  ]

  constructor() { }

  ngOnInit() {
  }

}
