import {Component, OnInit} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private modal: NzModalService) {
  }

  ngOnInit(): void {
  }

  logOut(): void {
    this.modal.confirm({
      nzTitle: '警告',
      nzContent: '确认要退出系统嘛?',
      nzOnOk: () => {
        window.location.replace('/login');
      }
    });

  }
}
