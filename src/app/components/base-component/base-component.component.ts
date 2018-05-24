import {Component, OnInit, Input} from '@angular/core';
import * as config from './base-component.config';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.css']
})
export class BaseComponentComponent implements OnInit {
  showDatatable: boolean = false;
  showHeatmap: boolean = false;
  localConfig;

  constructor() {
  }

  ngOnInit() {
    this.localConfig = config;
  }

  // event handler for inter-component communication
  onVoted(e) {
    console.log('e :: ', e);
    /*if (e.type === 'hm'){
      this.showHeatmap = e.value
    }*/
    e.type === 'hm' ? this.showHeatmap = e.value : this.showDatatable = e.value;
  }
}
