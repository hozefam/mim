import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mim-service-description',
  templateUrl: './service-description.component.html',
  styleUrls: ['./service-description.component.scss'],
})
export class ServiceDescriptionComponent implements OnInit {
  serviceId = '7';
  current_direction = 'rtl';

  constructor(
    public translate: TranslateService,
    public router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    if (id) this.serviceId = id;

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.current_direction = event.lang === 'en' ? 'ltr' : 'rtl';
    });
  }
}
