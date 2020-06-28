import {Component, OnInit} from '@angular/core';
import {fadeInOut} from '../../../utils/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeInOut]
})

export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  handleRouteChange(outlet: any) {
    return outlet && outlet.activatedRouteData;
  }
}
