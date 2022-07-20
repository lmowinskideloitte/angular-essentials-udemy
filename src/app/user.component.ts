import {Component} from "@angular/core";

@Component({
  selector: 'app-user',
  template: `
    <input type="text" [(ngModel)]="name">
    <p>mmmm, aha [{{ name }}]</p>
    <p>I'm the user component B)))</p>
  `
})
export class UserComponent {
  name = 'Młody Gypsy';

  onUserInput(event: any) {
    this.name = event.target.value;
  }
}
