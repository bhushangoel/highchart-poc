import {Component, OnInit, Input} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {baseChart} from '../config/highchart.config';

@Component({
  selector: 'app-base-chart',
  templateUrl: './base-chart.component.html',
  styleUrls: ['./base-chart.component.css'],
  providers: [DataService]
})
export class BaseChartComponent implements OnInit {
  @Input() type: string;
  @Input() selection: string;
  @Input() category: string;
  showChart: string;
  data;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {

    console.log('type here in base-chart component :', this.type);
    //TODO: API to fetch series for base-chart
    // const url = 'mock\\line-base-chart\\line-base-chart-data.json';
    this.data = this.dataService.getChartData(this.type);
    console.log('this.data :: ', this.data);
    this.showChart = this.type;
  }
}
