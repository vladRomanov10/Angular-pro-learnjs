import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ActivatedRoute, ChildrenOutletContexts} from "@angular/router";
import {myAnimationLast} from "./animations/last";
import {myAnimationSecond} from "./animations/second";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [myAnimationSecond],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'router-animations';

  private readonly childrenOutletContexts = inject(ChildrenOutletContexts)

  getRouterOutletState(): ActivatedRoute['component'] | undefined {
    return this.childrenOutletContexts.getContext('primary')?.route?.component
  }
}
