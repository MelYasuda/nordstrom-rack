import { Component, OnInit, Input } from '@angular/core';
import { Panel } from '../models/panel.model';

@Component({
  selector: 'app-square-panel',
  templateUrl: './square-panel.component.html',
  styleUrls: ['./square-panel.component.css']
})
export class SquarePanelComponent implements OnInit {

  @Input() childPanelList: Panel[];

  constructor() { }

  ngOnInit() {
  }

}
