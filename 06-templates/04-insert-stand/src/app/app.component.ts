import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { UndeclaratedComponent } from './undeclarated/undeclarated.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'insert-stand';

  @ViewChild('viewContainer', { static: true, read: ViewContainerRef })
  private container!: ViewContainerRef;

  readonly component$ = from(
    import('./undeclarated/undeclarated.component'),
  ).pipe(map((m) => m.UndeclaratedComponent));

  async onClickComponent() {
    const { UndeclaratedComponent } = await import(
      './undeclarated/undeclarated.component'
    );

    this.container.createComponent(UndeclaratedComponent);
  }

  onClickTemplate(template: TemplateRef<unknown>) {
    this.container.createEmbeddedView(template, { name: 'Vlad' });
  }

  onClickClear() {
    this.container.clear();
  }
}
