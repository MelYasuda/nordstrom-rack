import { Component, OnInit } from '@angular/core';
import { Panel } from '../models/panel.model';
import { PanelService } from '../panel.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PanelService]
})
export class AdminComponent implements OnInit {

  constructor(private panelService: PanelService) { }

  ngOnInit() {
  }

  submitForm(category: string, shop: string, src: string, alt: string) {
    var newPanel: Panel = new Panel(category, shop, src, alt);
    this.panelService.addPanel(newPanel);
  }

}
