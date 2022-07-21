import {Component} from "@angular/core";
import {random} from 'lodash';

// declare var _: any;  // npm install --save @types/lodash installed translations from js -> ts

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  loadState = 'loading';
  number = 0;
  randNumber = 0;

  onSwitchState() {
    this.loadState = 'finished';
  }

  onIncrement() {
    this.number += 1;
  }

  onRandomise() {
    this.randNumber = random(1, 100);
  }
}
