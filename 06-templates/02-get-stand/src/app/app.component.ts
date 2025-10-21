import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CatComponent } from './animals/cat/cat.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'contentchildren-by-service';

  @ContentChild('paragraph', { descendants: false }) paragraph:
    | HTMLElement
    | undefined;

  @ViewChild(CatComponent, { static: false }) catComponent:
    | CatComponent
    | undefined;
}
