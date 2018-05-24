import {Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef} from '@angular/core';
import {LinechartService} from './line-chart.service';
import {DataService} from '../../../services/data.service';
// global chart config
import {baseChart} from '../config/highchart.config';

export interface ChartItem {
  status: string;
  data: number[];
}


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
  providers: [DataService, LinechartService]
})
export class LineChartComponent implements OnInit {
  @Input() selection: string;
  @Input() type;
  @Input() config;
  @ViewChild('charts') public chartEl: ElementRef;
  @Output() voted: EventEmitter<any> = new EventEmitter();
  showHeatmap: boolean = false;
  showTable: boolean = true;
  options: Object;
  chart: Object;
  chartConfig;
  count = 0;

  constructor(private ds: DataService, private lcs: LinechartService) {
    // this config will map with config | service of the particular line-chart type
    // all config related changes will go into service, service will return final config for any particular line-chart type
    const chartConfigMap = {
      'line': {
        config: 'line',
        service: 'line-line-chart'
      },
      'heatmap': {
        config: 'heatmap',
        service: 'heatmap'
      }
    };
  }

  ngOnInit() {
    /*
    * Fetch data > from data service
    * fetch config > from global and local config
    * generate final chart options > @Input: pass data and config | @Output: final config -> via lineChartService
    * */

    // TODO: check deep copy
    // harcoding multiple config for now
    // this should depend on the type sent by parent
    // data should be sent by base-line-chart component | modified according to type
    this.chartConfig = JSON.parse(JSON.stringify(this.config));
    // this.chartConfig = <any>lineChart.lineChartMultiple;
    // using directive
    this.defineConfigNew();
    // using service
    // this.defineConfig();
  }

  saveInstance(chartInstance) {
    this.chart = chartInstance;
  }

  // highchart new way
  defineConfigNew() {
    // TODO: uncomment | generateConfig() will return final config required to generate graph
    /*
    * @Input:
    *   config > from linechart.config
    *   data > from base-line-chart component
    *   options
    *  @Output:
    *   final config
    * */
    // this.options = this.lcs.generateConfig(this.chartConfig, this.chartdata.data, {selection: this.selection});

    // TODO: remove hack of setting options direclty
    this.options = this.chartConfig;

    this.options.series.map(s => {
      const zones = this.addZones(s);
      s['zones'] = zones;
    });


    this.options['tooltip'] = {
      formatter: function () {
        return `<b>Client Id: </b> ${this.series.data[this.series.data.indexOf(this.point)].clientId}<br>
                <b>Quality Flag: </b> ${this.series.data[this.series.data.indexOf(this.point)].rejected ? 'Rejected' : 'Accepted'}</br>`;
      }
    };
    let self = this;
    this.options.plotOptions.series.point.events = {
      click: function () {
        console.log('this here :: ', this);
        let seriesId = this.series.userOptions.id;
        self.cleanSeries(this.x, seriesId);
      }
    };

    console.log('this options here :: ', this.options);
    return;
  }

  cleanSeries(point, seriesId) {
    let series = this.chart.get(seriesId);
    console.log('series :: ', series);
    series.data.map(d => {
      if (d.x === point || d.x === point + 2) {
        d.rejected = true;
      }
    });

    const zones = this.addZones(series);
    console.log('this options here 22 :: ', this.options, zones);
    series.update({zones});
    console.log('this.chart :: ', this.chart);
    // this.chart.series = this.options.series;
    // this.chart.redraw();
  }

  // show rejected points on graph logic
  addZones(series) {
    console.log('addZones series :: ', series);
    return this.createZoneData(series.data);
  }

  createZoneData(data) {
    let rejectedData = data.filter(function (d) {
      return d.rejected;
    }).map(function (d1) {
      return d1.x;
    });

    console.log(rejectedData);

    // TODO: fix logic
    let chunks = [];
    let prev = 0;
    let result = [];

    rejectedData.forEach(current => {
      if (current - prev !== 1) {
        chunks.push([]);
      }
      chunks[chunks.length - 1].push(current);
      prev = current;
    });

    chunks.forEach(chunk => {
      if (chunk.length > 1) {
        result.push({start: chunk[0], end: chunk[chunk.length - 1]});
      }
    });

    return this.createZones(result);
  }

  createZones(results) {
    let zones = [];
    results.forEach(record => {
      zones.push({value: record.start, dashStyle: 'solid'}, {value: record.end, dashStyle: 'dot'});
    });
    return zones;
  }

  setData(type, value) {
    this.voted.emit({type: type, value: value});
    console.log('here ::: ', type, value);
  }

  // base-line-chart events definitions start

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
      config.line-chart.events = {
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
