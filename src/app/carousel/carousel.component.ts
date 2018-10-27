import { Component, OnInit, Input } from '@angular/core';
import { Carousel } from '../models/carousel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() childCarouselList: Carousel[];

  constructor() { }

  ngOnInit() {
  }

}
