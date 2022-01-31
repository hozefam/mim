import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

import { LocalStorage } from '@ngx-pwa/local-storage';
import { ViewportScroller } from '@angular/common';
import defaultLanguage from '../assets/i18n/ar.json';

@Component({
  selector: 'mim-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedLang = 'ar';

  constructor(
    private translate: TranslateService,
    protected localStorage: LocalStorage,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    translate.setTranslation(this.selectedLang, defaultLanguage);
    translate.setDefaultLang(this.selectedLang);
    translate.use(this.selectedLang);

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scroll(0, 0);
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }

  ngOnInit(): void {}
}
