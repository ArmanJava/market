import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import {UserService} from './services/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  constructor(private userService: UserService,
              private router: Router,
              private translate: TranslateService) {
    // setDefaultLang
    translate.use('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
