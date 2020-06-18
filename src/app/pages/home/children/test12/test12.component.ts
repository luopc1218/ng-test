import {Component, OnInit} from '@angular/core';
import {BreadcrumbService} from '../../breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-test12',
  templateUrl: './test12.component.html',
  styleUrls: ['./test12.component.scss']
})
export class Test12Component implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit(): void {
    this.breadcrumbService.path.next(['系统管理', 'test12']);
  }

}
