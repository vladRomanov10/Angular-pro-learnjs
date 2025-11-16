import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstComponent implements DoCheck {
  ngDoCheck() {
    console.log('NgDoCheck from FirstComponent');
  }
}
