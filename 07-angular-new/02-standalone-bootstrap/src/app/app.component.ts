import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FirstComponent, SecondComponent, ThirdComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements DoCheck {
  title = 'stadealone-bootstrap';

  ngDoCheck() {
    console.log('NgDoCheck from AppComponent');
  }
}
