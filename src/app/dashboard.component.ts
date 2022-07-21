import { Component } from "@angular/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  loadState = 'loading';
  number = 0;

  onSwitchState() {
    this.loadState = 'finished';
  }

  onIncrement() {
    this.number += 1;
  }
}
