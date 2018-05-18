import {Injectable} from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable()
export class LinechartService {
  charts = [];
  chartTitleConfig = {
    'multiple-reject': 'Multiple point Selection',
    'single-reject': 'Single point Selection'
  };

  constructor() {
  }

  generateConfig(config, data, options) {
    // data manipulation according to requirement can be done here
    config.series[0].data = data;
    config.title.text = this.chartTitleConfig[options.selection];

    return config;
  }
}
