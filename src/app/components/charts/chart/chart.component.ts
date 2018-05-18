import {Component, OnInit, Input} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {baseChart} from '../config/highchart.config';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: [DataService]
})
export class ChartComponent implements OnInit {
  @Input() type: string;
  @Input() selection: string;
  showChart: string;
  data;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {

    console.log('type here in chart component :', this.type);
    //TODO: API to fetch series for chart
    // const url = 'mock\\line-chart\\line-chart-data.json';
    this.data = this.dataService.getChartData(this.type);
    console.log('this.data :: ', this.data);
    this.showChart = this.type;
  }
}
