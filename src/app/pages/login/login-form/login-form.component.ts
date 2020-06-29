import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd/message';
import {ConfigService} from '../../../config.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  validateForm!: FormGroup;
  loading: boolean;

  constructor(private fb: FormBuilder, private router: Router, private message: NzMessageService, private request: ConfigService) {
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
    // setTimeout(() => {
    //   const loadingMessage: string = this.message.loading('登陆中', {nzDuration: 0}).messageId;
    //   setTimeout(() => {
    //     this.loading = false;
    //     this.message.remove(loadingMessage);
    //     this.message.success('登陆成功');
    //     this.router.navigateByUrl('home');
    //   }, 2000);
    // }, 2000);
    this.request.post({
      url: '/login',
      params: {
        id: 20200001,
        userId: 'tse',
        userSex: 1
      },
      success: (res) => {
        console.log(res);
      },
      complete: () => {
        console.log('request complete!');
        this.loading = false;
      }
    });
  }
}
