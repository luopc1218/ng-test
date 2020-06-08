import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    if (this.checkIsLogin()) {
      console.log('load complete');
    }
  }

  // 检测是否登录了
  checkIsLogin(): boolean {
    if (true) {
      this.router.navigateByUrl('login');
      return false;
    } else {
      return true;
    }
  }
}
