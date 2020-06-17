import {Component, Input, OnInit} from '@angular/core';
import {NzModalRef, NzModalService} from 'ng-zorro-antd/modal';
import {NzMessageService} from 'ng-zorro-antd/message';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../test11.component';

@Component({
  selector: 'app-edit-user-info',
  templateUrl: './edit-user-info.component.html',
  styleUrls: ['./edit-user-info.component.scss']
})
export class EditUserInfoComponent implements OnInit {

  @Input() user?: User;

  loading: boolean;
  userInfoForm!: FormGroup;

  constructor(private modal: NzModalService, private modalRef: NzModalRef, private fb: FormBuilder, private message: NzMessageService) {

  }

  ngOnInit(): void {
    this.loading = false;
    this.userInfoForm = this.fb.group({
      id: [this.user.id, [Validators.required]],
      name: [this.user.name, [Validators.required]],
      sex: [this.user.sex],
      email: [this.user.email],
    });
  }

  submit(): void {
    this.modal.confirm({
      nzTitle: '提示',
      nzContent: '确认要修改这条信息吗?',
      nzOnOk: () => {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.message.success('修改成功');
          console.log(this.user);
          this.modalRef.destroy('updated');
        }, 1000);
      }
    });
  }
}
