import { Component, OnInit, Input } from '@angular/core';
import { Panel } from '../models/panel.model';
import { PanelService } from '../panel.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [PanelService]
})
export class WelcomeComponent implements OnInit {

  // @Input() parentPanel: Panel[];

  // masterPanel: Panel[] = [
  //   new Panel("Women's Designer Clothing", "SHOP NOW", "womens-designer-clothing.jpg", "womans-designer-clothing"),
  //   new Panel("Women's Designer Clothing", "SHOP NOW", "men-designer-shoes.jpg", "man-designer-shoes"),
  //   new Panel("Grab & Go", "SHOP NOW", "cosmetics.jpg", "cosmetics")
  // ]

  panels: FirebaseListObservable<any[]>;

  constructor(private panelService: PanelService) { }

  ngOnInit() {
    this.panels = this.panelService.getPanels();
  }

}
