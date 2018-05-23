import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ChartModule} from 'angular2-highcharts';
import * as Highcharts from 'highcharts';
import * as highchartsHeatmap from 'highcharts/modules/heatmap';
// Load the exporting module.
import * as HichartsExporting from 'highcharts/modules/exporting.src';  // tslint:disable-line
// Initialize exporting module.
HichartsExporting(Highcharts);
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {BaseComponentComponent} from './components/base-component/base-component.component';
import {LineChartComponent} from './components/charts/line-chart/line-chart.component';
import {DataTableComponent} from './components/data-table/data-table.component';
import {HeatMapComponent} from './components/charts/heat-map/heat-map.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponentComponent,
    LineChartComponent,
    DataTableComponent,
    HeatMapComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartModule.forRoot(Highcharts, highchartsHeatmap),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
