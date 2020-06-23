import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  validateForm!: FormGroup;
  loading: boolean;

  constructor(private fb: FormBuilder, private router: Router, private message: NzMessageService) {
  }

  ngOnInit(): void {
    this.loading = false;
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  //  前往注册
  toRegistered(): void {
    this.router.navigateByUrl('login/registered');
  }

  //  登录
  login(): void {
    this.loading = true;
    setTimeout(() => {
      const loadingMessage: string = this.message.loading('登陆中', {nzDuration: 0}).messageId;
      setTimeout(() => {
        this.loading = false;
        this.message.remove(loadingMessage);
        this.message.success('登陆成功');
        this.router.navigateByUrl('home');
      }, 2000);
    }, 2000);

  }
}
