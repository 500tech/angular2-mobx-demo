import { Component, ChangeDetectionStrategy } from '@angular/core';
import { frameworks } from '../stores/frameworks';

@Component({
  selector: 'app-frameworks-filter',
  templateUrl: './frameworks-filter.component.html',
  styleUrls: ['./frameworks-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameworksFilterComponent {
  private frameworks = frameworks;

  constructor() { }

}
