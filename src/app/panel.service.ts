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

updatePanel(localUpdatedPanel) {
  var panelEntryInFirebase = this.database.object('/panels/' + localUpdatedPanel.$key);
  console.log(panelEntryInFirebase);
  panelEntryInFirebase.update({ category: localUpdatedPanel.category, shop: localUpdatedPanel.shop, src: localUpdatedPanel.src, alt: localUpdatedPanel.alt })
}

}
