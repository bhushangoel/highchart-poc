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

  getChartDataComplex() {
    const chartData = {
      data: {
        x: [60, 70, 80, 81, 90, 95, 96, 97, 98, 99, 101, 102, 108, 110, 120, 130, 150, 175, 200],
        series: [
          {name: 'p1', y: -0.2, clientId: 'client1', rejected: false},
          {name: 'p2', y: 0.8, clientId: 'client2', rejected: false},
          {name: 'p3', y: 5.7, clientId: 'client3', rejected: false},
          {name: 'p4', y: 11.3, clientId: 'client4', rejected: false},
          {name: 'p5', y: 17, clientId: 'client5', rejected: false},
          {name: 'p6', y: 22, clientId: 'client6', rejected: false},
          {name: 'p7', y: 24.8, clientId: 'client7', rejected: false},
          {name: 'p8', y: 24.1, clientId: 'client8', rejected: false},
          {name: 'p9', y: 20.1, clientId: 'client9', rejected: false},
          {name: 'p10', y: 14.1, clientId: 'client10', rejected: false},
          {name: 'p11', y: 8.6, clientId: 'client11', rejected: false},
          {name: 'p12', y: 2.5, clientId: 'client12', rejected: false},
          {name: 'p13', y: 17, clientId: 'client13', rejected: false},
          {name: 'p14', y: 18.6, clientId: 'client14', rejected: false},
          {name: 'p15', y: 17.9, clientId: 'client15', rejected: false},
          {name: 'p16', y: 14.3, clientId: 'client16', rejected: false},
          {name: 'p17', y: 9, clientId: 'client17', rejected: false},
          {name: 'p18', y: 3.9, clientId: 'client18', rejected: false},
          {name: 'p19', y: 1, clientId: 'client19', rejected: false},
          {name: 'p16', x: 19, y: 14.3, clientId: 'client16', rejected: true},
          {name: 'p17', x: 20, y: 9, clientId: 'client17', rejected: true},
          {name: 'p18', x: 21, y: 3.9, clientId: 'client18', rejected: true},
          {name: 'p19', x: 22, y: 1, clientId: 'client19', rejected: true}
        ]
      }
    };
  }
}
