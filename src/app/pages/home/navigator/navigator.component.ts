import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

interface ModuleItem {
  id: number;
  title: string;
  url?: string;
  children?: ModuleItem[];
}

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  moduleList: ModuleItem[];

  constructor(private router: Router) {
  }

  //  获取模块列表
  getModuleList(): void {
    this.moduleList = [
      {
        id: 1, title: '系统管理', children: [
          {
            id: 11, title: '人员管理', url: '/home/test11'
          },
          {
            id: 12, title: '模块1-2', url: '/home/test12'
          }
        ]
      },
      {id: 2, title: '模块2', url: '/home/test2', children: []}
    ];
    //  进入第一个页面
    this.router.navigateByUrl(this.moduleList[0].children.length > 0 ? this.moduleList[0].children[0].url : this.moduleList[0].url);
  }

  ngOnInit(): void {
    this.getModuleList();
  }


}
