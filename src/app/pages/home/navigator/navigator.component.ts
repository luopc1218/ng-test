import {Component, OnInit} from '@angular/core';

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



  ngOnInit(): void {
    this.getModuleList();
  }

  //  获取模块列表
  getModuleList(): void {
    this.moduleList = [
      {
        id: 1, title: '模块1', children: [
          {
            id: 11, title: '模块1-1', url: '/home/test11'
          },
          {
            id: 12, title: '模块1-2', url: '/home/test12'
          }
        ]
      },
      {id: 2, title: '模块2', url: '/home/test2', children: []}
    ];
  }
}
