import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heat-map',
  template: '<chart [options]="options"></chart>',
  styleUrls: ['./heat-map.component.css']
})
export class HeatMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
