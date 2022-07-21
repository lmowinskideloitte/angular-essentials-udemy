import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-essentials-udemy';
  rootName = 'Młody Gypsy';
  rootItems = ['Piesiula', 'Kiciula', 'Wiewiura'];

  onItemWasAdded(newItem: string) {
    this.rootItems.push(newItem)
    console.log(this.rootItems)
  }

  onNameChanged(newName: string) {
    this.rootName = newName;
  }
}
