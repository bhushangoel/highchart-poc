import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import * as lineChart from './line-chart.config';
import * as Highcharts from 'highcharts';
// Load the exporting module.
import * as Exporting from 'highcharts/modules/exporting';
import {HighchartService} from '../services/highchart.service';
import {LinechartService} from './line-chart.service';


export interface ChartItem {
  status: string;
  data: number[];
}

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
  providers: [HighchartService, LinechartService]
})
export class LineChartComponent implements OnInit {
  @Input() selection: string;
  @Input() chartdata;
  @ViewChild('charts') public chartEl: ElementRef;
  options: Object;
  highchartContext;
  event;
  lineChartConfig;

  constructor(private hcs: HighchartService, private lcs: LinechartService) {
    // Initialize exporting module.
    Exporting(Highcharts);
  }

  ngOnInit() {
    // TODO: check deep copy
    // harcoding multiple config for now
    // this should depend on the type sent by parent
    // data should be sent by chart component | modified according to type
    // this.lineChartConfig = JSON.parse(JSON.stringify(<any>lineChart.lineChartMultiple));
    this.lineChartConfig = <any>lineChart.lineChartMultiple;
    // using directive
    this.defineConfigNew();
    // using service
    // this.defineConfig();
  }

  //highchart new way
  defineConfigNew() {
    // TODO: uncomment | generateConfig() will return final config required to generate graph
    /*
    * @Input:
    *   config > from linechart.config
    *   data > from chart component
    *   options
    *  @Output:
    *   final config
    * */
    // this.options = this.lcs.generateConfig(this.lineChartConfig, this.chartdata.data, {selection: this.selection});

    // TODO: remove hack of setting options direclty
    this.options = this.lineChartConfig;
    console.log("this options here :: ", this.options);
    return;
  }

  // chart events definitions start

  // multiple point selection events
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
  }
}
