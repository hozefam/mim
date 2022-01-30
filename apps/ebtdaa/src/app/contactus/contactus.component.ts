import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mim-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.location.replace('https://www.landloan.gov.sa/contactus');
  }
}
