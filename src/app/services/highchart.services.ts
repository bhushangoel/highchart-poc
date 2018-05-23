import {Injectable} from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable()
export class HighchartService {
  charts = [];

  constructor() {
  }

  createChart(container, config, options?: Object) {
    let opts = !!options ? options : config;
    let e = document.createElement('div');

    container.appendChild(e);

    if (!!opts.chart) {
      opts.chart['renderTo'] = e;
    }
    else {
      opts.chart = {
        'renderTo': e
      };
    }
    this.charts.push(new Highcharts.Chart(opts));
  }

  getCharts() {
    return this.charts;
  }
}
