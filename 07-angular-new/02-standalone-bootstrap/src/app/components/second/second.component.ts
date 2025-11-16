import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondComponent implements DoCheck, OnInit {
  ngOnInit() {
    const idSetInterval = setInterval(() => {
      console.log('SetInterval done');
      clearInterval(idSetInterval);
    }, 1000);
  }
  ngDoCheck() {
    console.log('NgDoCheck from SecondComponent');
  }
}
