import {Component, OnInit, Input} from '@angular/core';
// global chart config
import {baseChart} from '../config/highchart.config';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.css']
})
export class HeatMapComponent implements OnInit {
  options: Object;
  @Input() show: boolean;
  @Input() config;

  constructor() {
  }

  ngOnInit() {
    this.options = this.config;
  }

}
