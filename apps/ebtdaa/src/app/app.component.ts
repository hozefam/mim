import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';
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
    protected localStorage: LocalStorage
  ) {
    translate.setTranslation(this.selectedLang, defaultLanguage);
    translate.setDefaultLang(this.selectedLang);
    translate.use(this.selectedLang);
  }

  ngOnInit(): void {}
}
