import {Component, ViewChild, Input} from '@angular/core';

import Chart from 'chart.js';

import template from './chart-js.html';
import './chart-js.scss';

@Component({
  selector: 'chart-js',
  template
})
export class ChartJsComponent {
  @Input('chartData') data = {}
  @ViewChild('chartCanvas') canvas = null

  ngOnInit() {
    this.chart = new Chart(this.canvas.nativeElement, this.data);
  }
}
