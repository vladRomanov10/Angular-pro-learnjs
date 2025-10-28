import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'signals';

  readonly count = signal(0);

  doubleCount = computed(() => this.count() * 2);

  constructor() {
    this.count.set(3);

    setTimeout(() => {
      this.count.set(5);
    }, 3000);

    setInterval(() => console.log(this.count()), 1000);
  }

  get name(): string {
    console.log('Vlad');
    return 'Vlad';
  }
}
