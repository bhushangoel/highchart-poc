import {Component, OnInit, Input} from '@angular/core';
// global chart config
import * as config from './data-table.config';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() config;
  @Input() show;
  @Input() apiConfig;
  dtConfig;
  finalConfig;
  showTable = false;
  selectedRows = [];

  constructor() {
  }

  ngOnInit() {
    /*
    * Fetch data > from data service
    * fetch config > from global and local config
    * generate final datatable options > @Input: pass data and config | @Output: final config -> via data-table.service
    * */
    this.dtConfig = config.dt;
    this.fetchData();
  }

  fetchData() {
    // TODO: remove  mock JSON and fetch from data service | API end point will be sent from parent component
    const data = {
      headers: [
        {name: 'Client ID', value: 'clientId'},
        {name: 'Underlying', value: 'underlying'},
        {name: 'Spot', value: 'spot'},
        {name: 'Failure', value: 'failure'},
        {name: 'Implied Basis', value: 'impliedBasis'},
        {name: 'Rejected', value: 'rejected'}
      ],
      records: [
        {clientId: '100', underlying: 'BOVSPA1', spot: 'SE0017', failure: '00171', impliedBasis: '123', rejected: 'N'},
        {clientId: '110', underlying: 'BOVSPA2', spot: 'SE0018', failure: '00172', impliedBasis: '124', rejected: 'N'},
        {clientId: '120', underlying: 'BOVSPA3', spot: 'SE0019', failure: '00173', impliedBasis: '125', rejected: 'Y'},
        {clientId: '130', underlying: 'BOVSPA4', spot: 'SE0020', failure: '00174', impliedBasis: '126', rejected: 'N'},
        {clientId: '140', underlying: 'BOVSPA5', spot: 'SE0021', failure: '00175', impliedBasis: '127', rejected: 'Y'},
        {clientId: '150', underlying: 'BOVSPA6', spot: 'SE0022', failure: '00176', impliedBasis: '128', rejected: 'N'},
        {clientId: '160', underlying: 'BOVSPA7', spot: 'SE0023', failure: '00177', impliedBasis: '129', rejected: 'N'},
        {clientId: '170', underlying: 'BOVSPA8', spot: 'SE0024', failure: '00178', impliedBasis: '130', rejected: 'Y'},
        {clientId: '180', underlying: 'BOVSPA9', spot: 'SE0025', failure: '00179', impliedBasis: '131', rejected: 'N'},
        {clientId: '190', underlying: 'BOVSPA0', spot: 'SE0026', failure: '00170', impliedBasis: '132', rejected: 'N'}
      ]
    };

    this.generateConfig(data);
  }

  generateConfig(data) {
    this.finalConfig = Object.assign(this.dtConfig, this.config);
    this.finalConfig['headers'] = data.headers;
    this.finalConfig['records'] = data.records;
    this.showTable = true;
  }

  updateRowSelection(record, e) {
    if (e.target.checked) {
      this.selectedRows.push(record);
    } else {
      let i;
      this.selectedRows.forEach((row, idx) => {
        if (row.clientId === record.clientId) {
          i = idx;
          return;
        }
      });

      this.selectedRows.splice(i, 1);
    }

    console.log('this.selectedRows :: ', this.selectedRows);
  }

}
