import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./main.html')
})
export class MainComponent {
  data = {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          type: 'line',
          label: 'Average Issues',
          backgroundColor: 'black',
          borderColor: 'black',
          data: [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4],
          fill: false,
          pointRadius: 28,
          pointHoverRadius: 39,
          showLine: false
        },
        {
          label: 'Issues',
          backgroundColor: 'rgba(200, 0, 200, 1)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 78,
          data: [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8]
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      responsive: true,
      legend: {
        display: false
      },
      elements: {
        point: {
          pointStyle: 'line'
        }
      }
    }
  };
}
