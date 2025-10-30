import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
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

    effect(() => {
      console.log(`The current count: ${this.count()}`);
    });
  }
}
