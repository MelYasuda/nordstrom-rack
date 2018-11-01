import { Injectable } from '@angular/core';
import { Panel } from './models/panel.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class PanelService {
  panels: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.panels = database.list('panels');
 }

  getPanels() {
  return this.panels;
}

addPanel(newPanel: Panel) {
  this.panels.push(newPanel);
}

}
