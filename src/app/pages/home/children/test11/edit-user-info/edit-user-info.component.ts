import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../test11.component';
import { ConfigService } from '../../../../../config.service';

@Component({
  selector: 'app-edit-user-info',
  templateUrl: './edit-user-info.component.html',
  styleUrls: ['./edit-user-info.component.scss'],
})
export class EditUserInfoComponent implements OnInit {
  @Input() id?: number;

  loading = false;
  userInfoForm!: FormGroup;

  constructor(
    private modal: NzModalService,
    private modalRef: NzModalRef,
    private fb: FormBuilder,
    private message: NzMessageService,
    private request: ConfigService
  ) {}

  ngOnInit(): void {
    this.getInfo(this.id);
    this.userInfoForm = this.fb.group({
      id: [null, [Validators.required]],
      name: [{ value: '' }, [Validators.required]],
      sex: [null],
      email: [''],
      phone: ['', [Validators.required]],
    });
  }
  //  获取用户数据
  getInfo(id): void {
    this.loading = true;
    this.request.get({
      url: '/users/getInfoById',
      params: {
        id,
      },
      success: (res) => {
        this.userInfoForm.setValue(res.data);
      },
      fail: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
  //  提交修改
  submit(): void {
    this.modal.confirm({
      nzTitle: '提示',
      nzContent: '确认要修改这条信息吗?',
      nzOnOk: () => {
        this.loading = true;
        this.request.post({
          url: '/users/updateById',
          params: this.userInfoForm.value,
          success: (res) => {
            this.message.success('修改成功');
            this.modalRef.destroy('updated');
          },
          fail: (err) => {
            console.error(err);
          },
          complete: () => {
            this.loading = false;
          },
        });
      },
    });
  }
}
