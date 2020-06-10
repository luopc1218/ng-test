import {Component, OnInit} from '@angular/core';

interface ModuleItem {
  id: number;
  title: string;
  name: string;
  children?: ModuleItem[];
}

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  moduleList: ModuleItem[];

  constructor() {
  }

  ngOnInit(): void {
    this.getModuleList()
  }

  //  获取模块列表
  getModuleList(): void {
    this.moduleList = [
      {
        id: 1, title: '模块1', name: 'module1', children: [
          {
            id: 11, title: '模块11', name: 'module11'
          },
          {
            id: 12, title: '模块12', name: 'module12'
          }
        ]
      },
      {id: 2, title: '模块1', name: 'module1'}
    ]
    console.log(this.moduleList)
  }

}
