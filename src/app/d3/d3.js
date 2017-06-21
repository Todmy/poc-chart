import {Component, Input} from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

import template from './d3.html';
import './d3.scss';

@Component({
  selector: 'd3',
  template
})
export class D3Component {
  @Input() chartData = {}

  constructor() {
    this.margin = {top: 10, right: 10, bottom: 30, left: 40};
  }

  ngOnInit() {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawBars();
    this.drawAverage();
  }

  initSvg() {
    this.svg = d3.select('svg');
    this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
    this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
    this.chart = this.svg.append('g')
                     .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.chartData.map(d => d.label));
    this.y.domain([0, d3Array.max(this.chartData, d => d.issues)]);
  }

  drawAxis() {
    this.chart.append('g')
          .attr('class', 'axis axis--x')
          .attr('transform', 'translate(0,' + this.height + ')')
          .call(d3Axis.axisBottom(this.x));

    this.chart.append('g')
          .attr('class', 'axis axis--y')
          .call(d3Axis.axisLeft(this.y)).append('text');
  }

  drawBars() {
    this.chart.append('g')
          .attr('class', 'bars')
          .selectAll('.bar')
          .data(this.chartData)
          .enter().append('rect')
          .attr('class', 'bar')
          .attr('x', d => this.x(d.label))
          .attr('y', d => this.y(d.issues))
          .attr('width', this.x.bandwidth())
          .attr('height', d => this.height - this.y(d.issues));
  }

  drawAverage() {
    this.chart.append('g')
          .attr('class', 'average')
          .selectAll('.aver')
          .data(this.chartData)
          .enter().append('line')
          .attr('class', 'aver')
          .attr('x1', d => this.x(d.label))
          .attr('y1', d => this.y(d.average))
          .attr('x2', (d, i) => {
            return this.x.step() * (i + 1) + 2;
          })
          .attr('y2', d => this.y(d.average))
  }
}
