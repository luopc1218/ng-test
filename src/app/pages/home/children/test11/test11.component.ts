import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EditUserInfoComponent } from './edit-user-info/edit-user-info.component';
import { BreadcrumbService } from '../../breadcrumb/breadcrumb.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ConfigService } from '../../../../config.service';

export interface User {
  id: number;
  name?: string;
  sex?: null | number;
  phone?: string;
  email?: string;
}

@Component({
  selector: 'app-test11',
  templateUrl: './test11.component.html',
  styleUrls: ['./test11.component.scss'],
})
export class Test11Component implements OnInit {
  loading = false;
  searchForm!: FormGroup;
  userList: User[];

  constructor(
    private fb: FormBuilder,
    private modal: NzModalService,
    private breadcrumbService: BreadcrumbService,
    private message: NzMessageService,
    private request: ConfigService
  ) {}

  ngOnInit(): void {
    this.breadcrumbService.path.next(['系统管理', '人员管理']);
    this.searchForm = this.fb.group({
      name: [''],
      sex: [null], //  0:男,1:女
    });
    this.search();
  }

  //  查询人员列表
  search(): void {
    this.loading = true;

    this.request.get({
      url: '/users/getList',
      params: {
        test: 'test',
      },
      success: (res) => {
        this.userList = res.data;
      },
      fail: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  //  编辑人员信息
  toEditUserInfo(id: number): void {
    const editModal = this.modal.create({
      nzTitle: '人员信息编辑',
      nzContent: EditUserInfoComponent,
      nzComponentParams: {
        id,
      },
      nzFooter: null,
    });
    editModal.afterClose.subscribe((event: string): void => {
      switch (event) {
        case 'updated':
          this.search();
          break;
      }
    });
  }

  //  删除人员
  delUser(id: number): void {
    this.loading = true;
    this.request.post({
      url: '/users/deletelById',
      params: {
        id,
      },
      success: (res) => {
        this.message.success('删除成功');
        this.search();
      },
      fail: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
