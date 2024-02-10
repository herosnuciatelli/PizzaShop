'use client'

import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component<{}, {options: object, series: any }> {
  constructor(props:any) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          foreColor: '#6B7280',
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        xaxis: {
          categories: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
        },
        stroke: {
          //curve: 'smooth',
          width: 5
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#10B981'],
        tooltip: {
          theme: 'dark',
          style: {
            fontSize: '12px',
            fontFamily: undefined,
            background: '#000'
          }
        },
        grid: {
          show: true,
          borderColor: '#6B7280'
        }
      },
      series: [
        {
          name: "Recipe",
          data: [1000, 570, 350, 870, 200, 450, 700]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart h-52 md:h-full">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="100%"
              height='100%'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LineChart;