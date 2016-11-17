import { Component, ChangeDetectionStrategy } from '@angular/core';
import { frameworks } from '../stores/frameworks';

@Component({
  selector: 'app-frameworks-list',
  templateUrl: './frameworks-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameworksListComponent {
  private frameworks = frameworks;

  constructor() { }

}
