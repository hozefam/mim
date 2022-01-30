import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'mim-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
})
export class AboutusComponent implements OnInit {
  title = 'ebtdaa';
  selectedLang = 'ar';
  current_direction = 'rtl';

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.current_direction =
      this.translate.currentLang === 'en' ? 'ltr' : 'rtl';

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.current_direction = event.lang === 'en' ? 'ltr' : 'rtl';
    });
  }
}
