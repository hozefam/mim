import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'mim-service-description',
  templateUrl: './service-description.component.html',
  styleUrls: ['./service-description.component.scss'],
})
export class ServiceDescriptionComponent implements OnInit {
  serviceId = '7';

  constructor(
    public translate: TranslateService,
    public router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    if (id) this.serviceId = id;
  }
}
