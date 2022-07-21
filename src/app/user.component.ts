import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" [value]="name">
<!--    <input type="text" [(ngModel)]="name">-->
    <p>mmmm, aha [{{ name }}]</p>
    <p>I'm the user component B)))</p>
  `
})
export class UserComponent {
  @Input() name: string | undefined;
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event: any) {
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }
}
