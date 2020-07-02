import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Md5 } from 'ts-md5/dist/md5';
import { NzModalService } from 'ng-zorro-antd/modal';
import { updateHistoryUsersIds } from '../utils/index';
@Injectable({
  providedIn: 'root',
})
export class SystemService {
  private isLogin = false;

  constructor(
    private request: ConfigService,
    private router: Router,
    private message: NzMessageService,
    private modal: NzModalService
  ) {}

  //  登录
  login(formData): any {
    const loginFormData = { ...formData };
    loginFormData.password = Md5.hashStr(loginFormData.password);
    return new Promise((resolve, rejects) => {
      this.request.post({
        url: '/login',
        params: loginFormData,
        success: (res) => {
          resolve(res);
          const loadingMessage: string = this.message.loading('登陆中', {
            nzDuration: 0,
          }).messageId;
          //  保存token到localStorage
          localStorage.setItem('access_token', res.data.accessToken);
          updateHistoryUsersIds(loginFormData.userId).then(() => {
            this.message.remove(loadingMessage);
            this.message.success('登陆成功');
            this.router.navigateByUrl('home');
          });
        },
        fail: (err) => {
          rejects(err);
          console.error('登陆失败');
        },
      });
    });
  }

  //  注销
  logOut(): void {
    this.modal.confirm({
      nzTitle: '警告',
      nzContent: '确认要退出系统嘛?',
      nzOnOk: () => {
        localStorage.removeItem('access_token');
        window.location.replace('/login');
      },
    });
  }

  //  获取登陆状态(本地)
  getLoginState(): boolean {
    return this.isLogin;
  }

  //  检查登陆状态(请求服务器)
  checkIsLogin(): boolean {
    return false;
  }
}
