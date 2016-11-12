import { Component } from '@angular/core';
import { frameworks } from '../stores/frameworks';

@Component({
  selector: 'app-new-framework',
  templateUrl: './new-framework.component.html',
  styleUrls: ['./new-framework.component.css']
})
export class NewFrameworkComponent {
  private frameworks = frameworks;
  private newItem = '';

  constructor() { }

  addNew() {
    this.frameworks.addNew(this.newItem);
    this.newItem = '';
  }

}
