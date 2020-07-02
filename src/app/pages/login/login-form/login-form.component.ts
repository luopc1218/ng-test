import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ConfigService } from '../../../config.service';
import { SystemService } from '../../../system.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  validateForm!: FormGroup;
  loading: boolean;
  historyUsersId: any[];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private message: NzMessageService,
    private request: ConfigService,
    private system: SystemService
  ) {}

  ngOnInit(): void {
    this.loading = false;
    this.historyUsersId =
      JSON.parse(localStorage.getItem('history_users_id')) || [];
    this.validateForm = this.fb.group({
      userId: [this.historyUsersId[0] || '', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  //  前往注册
  toRegistered(): void {
    this.router.navigateByUrl('login/registered');
  }

  //  登录
  login(): void {
    this.loading = true;
    this.system.login(this.validateForm.value).catch((err) => {
      this.loading = false;
    });
    // setTimeout(() => {

    // }, 2000);
  }
}
