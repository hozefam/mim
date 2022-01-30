import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mim-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.location.replace('https://www.landloan.gov.sa/login');
  }
}
