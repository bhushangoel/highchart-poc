import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

export interface ChartItem {
  status: string;
  data: number[];
}

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {
  }

  getChartData(chartType) {
    //TODO: remove mock data and integrate API
    const chartData = {
      'status': 'SUCCESS',
      'data': [
        29.9,
        71.5,
        106.4,
        129.2,
        144.0,
        176.0,
        135.6,
        148.5,
        216.4,
        194.1,
        95.6,
        54.4
      ]
    };

    return chartData;
  }
}
