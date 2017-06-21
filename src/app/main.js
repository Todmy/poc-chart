import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./main.html')
})
export class MainComponent {
  data = [
      { label: 'Jan', issues: 5, average: 3 },
      { label: 'Feb', issues: 4, average: 2 },
      { label: 'Mar', issues: 3, average: 9 },
      { label: 'Apr', issues: 7, average: 5 },
      { label: 'May', issues: 5, average: 4 },
      { label: 'Jun', issues: 10, average: 6 },
      { label: 'Jul', issues: 3, average: 4 },
      { label: 'Aug', issues: 4, average: 6 },
      { label: 'Sep', issues: 8, average: 7 },
      { label: 'Oct', issues: 10, average: 8 },
      { label: 'Nov', issues: 6, average: 7 },
      { label: 'Dec', issues: 8, average: 4 }
    ]
}
