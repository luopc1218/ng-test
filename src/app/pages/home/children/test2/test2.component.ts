import {Component, OnInit} from '@angular/core';
import {BreadcrumbService} from '../../breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit(): void {
    this.breadcrumbService.path.next(['系统管理', 'test2']);
  }

}
