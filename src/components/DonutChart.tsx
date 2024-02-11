'use client'

import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class DonutChart extends Component<{}, {options: object, series: any }> {
  constructor(props:any) {
    super(props);

    this.state = {
      options: {
        dataLabels: {
          enabled: false
        },
        chart: {
          type: 'donut',
          foreColor: '#6B7280',
        },
        labels: ["Pizza", "Sushi", "Tacos", "Pad Thai"],
        colors: ['#10B981', '#38a3a5', '#663399', '#301466'],
        legend: {
          show: true,
          position: window.innerWidth < 768 ? 'bottom': 'right',
          floating: false,
        }
      },
      series: [44, 55, 41, 17],
    }
  }

  render() {

    return (
      <div className="donut h-52 md:h-full">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="100%" height="100%"/>
      </div>
    );
  }
}

export default DonutChart;