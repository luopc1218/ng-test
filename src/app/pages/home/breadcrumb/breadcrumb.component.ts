import {Component, OnInit} from '@angular/core';
import {BreadcrumbService} from './breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  path: string[];

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit(): void {
    //  订阅面包屑变化
    this.breadcrumbService.path.subscribe(path => {
      this.path = path;
    });
  }

}
