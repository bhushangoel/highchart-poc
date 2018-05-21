import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import * as config from './chart.config';
import {HighchartService} from '../services/highchart.service';
import {LinechartService} from './services/line-chart.service';
import {ChartModule} from 'angular2-highcharts';


export interface ChartItem {
  status: string;
  data: number[];
}


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: [HighchartService, LinechartService]
})
export class ChartComponent implements OnInit {
  @Input() selection: string;
  @Input() chartdata;
  @Input() type;
  @ViewChild('charts') public chartEl: ElementRef;
  showHeatmap: boolean;
  showTable: boolean;
  options: Object;
  highchartContext;
  event;
  chartConfig;

  constructor(private hcs: HighchartService, private lcs: LinechartService) {
    // this config will map with config | service of the particular chart type
    // all config related changes will go into service, service will return final config for any particular chart type
    const chartConfigMap = {
      'line': {
        config: 'line',
        service: 'line-chart'
      },
      'heatmap': {
        config: 'heatmap',
        service: 'heatmap'
      }
    };
  }

  ngOnInit() {
    // TODO: check deep copy
    // harcoding multiple config for now
    // this should depend on the type sent by parent
    // data should be sent by base-chart component | modified according to type
    this.chartConfig = JSON.parse(JSON.stringify(<any>config[this.type]));
    // this.chartConfig = <any>lineChart.lineChartMultiple;
    // using directive
    this.defineConfigNew();
    // using service
    // this.defineConfig();
  }

  // highchart new way
  defineConfigNew() {
    // TODO: uncomment | generateConfig() will return final config required to generate graph
    /*
    * @Input:
    *   config > from linechart.config
    *   data > from base-chart component
    *   options
    *  @Output:
    *   final config
    * */
    // this.options = this.lcs.generateConfig(this.chartConfig, this.chartdata.data, {selection: this.selection});

    // TODO: remove hack of setting options direclty
    this.options = this.chartConfig;
    this.options['tooltip'] = {
      formatter: function () {
        return `<b>Client Id: </b> ${this.series.data[this.series.data.indexOf(this.point)].clientId}<br>
                <b>Quality Flag: </b> ${this.series.data[this.series.data.indexOf(this.point)].rejected ? 'Rejected' : 'Accepted'}</br>`;
      }
    };

    console.log('this options here :: ', this.options);
    return;
  }

  setData(type, value) {
    console.log('here ::: ', type, value);
  }

  // base-chart events definitions start

  /*// multiple point selection events
  selectPointsByDrag(e) {
    console.log('event here :: ', e);
    this.highchartContext = e.context;
    this.event = e.originalEvent;
    // Select points
    this.highchartContext.series.forEach(series => {
      series.points.forEach(point => {
        if (point.x >= this.event.xAxis[0].min && point.x <= this.event.xAxis[0].max &&
          point.y >= this.event.yAxis[0].min && point.y <= this.event.yAxis[0].max) {
          point.select(true, true);
        }
      });
    });
    // this.showRemoveButton = true;
    // this.selectedPoints({points: highchartContext.getSelectedPoints()});
    // Fire a custom event
    // Highcharts.fireEvent(this.highchartContext, 'selectedpoints', {points: this.highchartContext.getSelectedPoints()});
    return false; // Don't zoom
  }

  selectedPoints(e) {
    console.log('3 -- ', this.abc);
    // show remove button
    this.showRemoveButton = true;
  }

  unselectByClick(e) {
    let points = this.highchartContext.getSelectedPoints();
    if (points.length > 0) {
      points.forEach(point => {
        point.select(false);
        this.showRemoveButton = false;
        // self.toast = self.toast.fadeOut();
        // $("#removeSection").css("display", "none");
      });
    }
  }

  // single point selection events
  singleSelect(e) {
    if (this.series.data.length > 1) {
      // var indexes = findIndexes(e.point);
      this.remove();
    }
  }

  // highchart old way
  defineConfig() {
    console.log('1 -- ', this.abc);
    const config = this.lcs.generateConfig(this.lineChartConfig, this.chartdata.data, {selection: this.selection});

    // TODO: config specific to reject points feature, can be moved to another class | will keep here for now
    if (this.selection === 'multiple-reject') {
      config.chart.events = {
        selection: this.selectPointsByDrag,
        selectedpoints: this.selectedPoints,
        click: this.unselectByClick
      };
    } else if (this.selection === 'single-reject') {
      config.series[0]['point'].events = {
        click: this.singleSelect
      };
    }
    this.generateChart(config);
  }

  generateChart(config) {
    console.log('2 -- ', this.abc);
    console.log('this.lineChartConfig :: ', this.lineChartConfig);
    this.hcs.createChart(this.chartEl.nativeElement, config);
  }*/
}
