import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isHideNav: boolean;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    if (this.checkIsLogin()) {
      console.log('load complete');
    }
    this.isHideNav = false;
  }

  // 检测是否登录了
  checkIsLogin(): boolean {
    if (false) {
      this.router.navigateByUrl('login');
      return false;
    } else {
      return true;
    }
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


  //  注销
  signOut(): void {
    window.location.replace('/login');
  }
}
