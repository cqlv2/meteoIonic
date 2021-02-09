import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Weather', url: '/weather', icon: 'cloud-circle' },
    { title: 'forum', url: '/forum', icon: 'people-circle' },
    { title: 'Login', url: '/login', icon: 'log-in' },

  ];
  constructor() {}
}
