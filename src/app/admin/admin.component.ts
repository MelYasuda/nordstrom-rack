import { Component, OnInit } from '@angular/core';
import { Panel } from '../models/panel.model';
import { PanelService } from '../panel.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PanelService]
})
export class AdminComponent implements OnInit {

  panels: FirebaseListObservable<any[]>;

  constructor(private panelService: PanelService) { }

  ngOnInit() {
    this.panels = this.panelService.getPanels();
  }

  submitForm(category: string, shop: string, src: string, alt: string) {
    var newPanel: Panel = new Panel(category, shop, src, alt);
    this.panelService.addPanel(newPanel);
  }



}
