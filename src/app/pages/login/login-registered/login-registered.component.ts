import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../../../config.service';
//  !MD5
import { Md5 } from 'ts-md5/dist/md5';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

import { updateHistoryUsersIds } from '../../../../utils/index';

@Component({
  selector: 'app-login-registered',
  templateUrl: './login-registered.component.html',
  styleUrls: ['./login-registered.component.scss'],
})
export class LoginRegisteredComponent implements OnInit {
  registeredForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private request: ConfigService,
    private modal: NzModalService
  ) {}
  //  验证两次密码输入是否一致
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registeredForm.controls.password.value) {
      return { valueInvalid: true, error: true };
    }
    return {};
  };
  ngOnInit(): void {
    this.registeredForm = this.fb.group({
      userName: [null, [Validators.required]],
      sex: [null],
      password: [null, [Validators.required]],
      passwordCheck: [null, [Validators.required, this.confirmationValidator]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.email]],
    });
  }

  submit(): void {
    this.loading = true;
    console.log(this.registeredForm.value);
    this.request.post({
      url: '/users/add',
      params: {
        userName: this.registeredForm.value.userName,
        password: Md5.hashStr(this.registeredForm.value.password),
        sex: this.registeredForm.value.sex,
        email: this.registeredForm.value.email,
        phone: this.registeredForm.value.phone,
      },
      success: (res) => {
        if (res.ok) {
          const modal = this.modal.create({
            nzTitle: '注册成功',
            nzClosable: false,
            nzMaskClosable: false,
            nzContent: `您的用户ID为:<h1>${res.data.userId}</h1>`,
            nzFooter: [
              {
                label: '去登陆',
                type: 'primary',
                onClick: () => {
                  updateHistoryUsersIds(res.data.userId).then(() => {
                    modal.destroy();
                    this.router.navigateByUrl('/login');
                  });
                },
              },
            ],
          });
        }
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  back(): void {
    this.router.navigateByUrl('/login');
  }
}
