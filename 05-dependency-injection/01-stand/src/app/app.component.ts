import { Component, Injector } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'stand'

  constructor() {
    const injector = Injector.create({
      providers: [
        {
          provide: 'name',
          useFactory: () => {
            console.log('useFactory')
            return 'Vlad'
          },
        },
      ],
    })
    console.log('Before')
    console.log(injector.get('name'))
    console.log('After')
  }
}
