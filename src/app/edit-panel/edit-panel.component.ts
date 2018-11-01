import { Component, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.css'],
  providers: [PanelService]
})
export class EditPanelComponent implements OnInit {

  panels: FirebaseListObservable<any[]>;

  constructor(private panelService: PanelService) { }

  ngOnInit() {
    this.panels = this.panelService.getPanels();
  }

  beginUpdatingPanel(panelToUpdate){
    this.panelService.updatePanel(panelToUpdate);
  }

}
