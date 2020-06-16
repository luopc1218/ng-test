import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NzModalService} from 'ng-zorro-antd/modal';
import {EditUserInfoComponent} from './edit-user-info/edit-user-info.component';

interface User {
  id: number;
  name?: string;
  sex?: null | number;
  email?: string;
}

@Component({
  selector: 'app-test11',
  templateUrl: './test11.component.html',
  styleUrls: ['./test11.component.scss']
})
export class Test11Component implements OnInit {
  loading: boolean;
  searchForm!: FormGroup;
  userList: User[];

  constructor(private fb: FormBuilder, private modal: NzModalService) {
  }

  ngOnInit(): void {
    this.loading = false;
    this.searchForm = this.fb.group({
      name: [''],
      sex: [null], //  0:男,1:女
      email: [''],
    });
    this.search();
  }

  //  查询人员列表
  search(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.userList = [
        {
          id: 1,
          name: '张三',
          sex: 1,
          email: '无'
        },
        {
          id: 2,
          name: '李四',
          sex: 0,
          email: '无'
        },
        {
          id: 3,
          name: '啥视',
          sex: null,
          email: '666@qq.com'
        },
        {
          id: 4,
          name: '知识',
          sex: 1,
          email: 'aaaa@163.com'
        },
      ];
    }, 1000);
  }

  //  删除人员
  delUser(id: number): void {
    console.log(id);
  }

  //  编辑人员信息
  toEditUserInfo(id: number): void {
    this.modal.create({
      nzTitle: '人员信息编辑',
      nzContent: EditUserInfoComponent,
      nzComponentParams: {
        id
      },
      nzOnOk: () => {

      }
    });
  }
}
