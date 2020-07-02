import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../../system.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isShowUserInfo = false;

  constructor(public system: SystemService) {}

  ngOnInit(): void {}


}
