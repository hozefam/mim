import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'mim-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
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
