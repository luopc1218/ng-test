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
    private request: ConfigService
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
      password: [null, [Validators.required]],
      passwordCheck: [null, [Validators.required, this.confirmationValidator]],
      sex: [null],
      email: [null, [Validators.email, Validators.required]],
      phone: [null],
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
        email: this.registeredForm.value.email,
      },
      success: (res) => {
        console.log(res);
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
