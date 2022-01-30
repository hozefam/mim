import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'mim-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss'],
})
export class TopmenuComponent {
  constructor(public translate: TranslateService) {}

  onLangChange(language: string) {
    console.log('Changed Language to ' + language);
    this.translate.use(language);
  }
}
