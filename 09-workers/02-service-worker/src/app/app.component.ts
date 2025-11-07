import { Component } from '@angular/core';
import { SwPush, SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'service-worker';

  constructor(swUpdate: SwUpdate, swPush: SwPush) {
    swUpdate.versionUpdates
      .pipe(
        filter(
          (event): event is VersionReadyEvent => event.type === 'VERSION_READY',
        ),
      )
      .subscribe(() => {
        if (confirm('Есть новая версия приложения, загрузить?')) {
          document.location.reload();
        }
      });
    swPush.messages.subscribe((message) => {
      console.log(message);
    });
  }
}
