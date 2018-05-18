import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { ChartModule } from 'angular2-highcharts';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ChartComponent} from './components/charts/chart/chart.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    ChartModule.forRoot(require('highcharts')),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
