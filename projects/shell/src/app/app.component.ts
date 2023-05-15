// IMPORTANT: Make sure you import the service
//  from 'auth-lib'!
import { AuthLibService } from 'auth-lib';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'shell';

  constructor(private service: AuthLibService) {
    this.service.login('Max', null);
  }
}
