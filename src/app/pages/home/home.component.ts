import {Component, OnInit} from '@angular/core';
import {fadeInOut} from '../../../utils';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInOut]
})
export class HomeComponent implements OnInit {
  isHideNav: boolean;

  constructor() {
  }

  ngOnInit(): void {

    // if (this.checkIsLogin()) {
    // }
    this.isHideNav = false;
  }

  // 检测是否登录了
  checkIsLogin(): boolean {
    // if (false) {
    //   this.router.navigateByUrl('login');
    //   return false;
    // } else {
    //   return true;
    // }
    return true;
  }

  //  切换导航栏显示
  toggleNav(): void {
    //  隐藏导航栏
    const hideNav = (): void => {
      this.isHideNav = true;
    };

    //  显示导航栏
    const showNav = (): void => {
      this.isHideNav = false;
    };
    if (this.isHideNav) {
      showNav();
    } else {
      hideNav();
    }
  }

  handleRouteChange(outlet: any) {
    return outlet && outlet.activatedRouteData;
  }
}
