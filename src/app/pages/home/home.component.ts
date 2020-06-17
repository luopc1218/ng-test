import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BreadcrumbService} from './breadcrumb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isHideNav: boolean;

  constructor(private router: Router, public breadcrumb: BreadcrumbService) {
  }

  ngOnInit(): void {
    if (this.checkIsLogin()) {
      console.log('load complete');
    }
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
}
