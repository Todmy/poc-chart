import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core'
import * as Chartist from 'chartist';

import template from './chartist.html';
import './chartist.scss';
import 'chartist/dist/chartist.min.css';

const BASIC_INDEX = 'a'.charCodeAt(0);

@Component({
  template,
  selector: 'chartist'
})
export class ChartistCopmonent {
  constructor() {
    this.options = {
      type: 'Bar',
      seriesBarDistance: 0,
      barWidth: 77
    };
  }

  @Input() chartMetrics = {}
  @Input()
  set chartOptions(options) {
    Object.assign(this.options, options)
  }

  @Output('draw') onDraw = new EventEmitter()

  @ViewChild('chart') chartPlaceholder = null

  ngAfterViewInit() {
    this.createChart()
  }

  createChart() {
    this.itemChart = new Chartist[this.options.type](this.chartPlaceholder.nativeElement, {
      labels: this.chartMetrics.labels,
      series: this.chartMetrics.series || []
    }, this.options).on('draw', chartItem => {
      this.onDraw.emit(chartItem);

      if (chartItem.type === 'bar') {
        chartItem.element.attr({
          style: `stroke-width: ${this.options.barWidth}px`
        });

        if (chartItem.seriesIndex === 1) {
          chartItem.group.append(new Chartist.Svg('line', {
            x1: chartItem.x1 - this.options.barWidth / 2,
            y1: chartItem.y2,
            x2: chartItem.x1 + this.options.barWidth / 2,
            y2: chartItem.y2
          }, 'ct-slice-line'));
        }
      }
    });
  }

  indexToChar(index) {
    return String.fromCharCode(BASIC_INDEX + index);
  }

  ngOnDestroy() {
    if (this.itemChart) {
      this.itemChart.detach();
    }
  }
}
