import { Component, ViewChild, ViewContainerRef } from '@angular/core'
import { CatComponent } from './animals/cat/cat.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'contentchildren-by-service';

  @ViewChild('catComponent', {read: ViewContainerRef}) catComponent: CatComponent | undefined;
}
