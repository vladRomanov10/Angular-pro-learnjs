import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [],
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdComponent implements DoCheck {
  ngDoCheck() {
    console.log('NgDoCheck from ThirdComponent');
  }
}
