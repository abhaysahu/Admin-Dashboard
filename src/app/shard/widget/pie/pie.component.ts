import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';



@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {


  chartOptions: {};
  @Input() data: any = [];
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        height: 60
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
        split: true,
        outside: true
      },
      legend: {
        enabled: false
      },

      credits: {
        enabled: false
      },
      exporting: {
        enabled: false,
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      series: [{
        data: [71,78,39,66]
    }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}