import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-user-info',
  templateUrl: './edit-user-info.component.html',
  styleUrls: ['./edit-user-info.component.scss']
})
export class EditUserInfoComponent implements OnInit {

  @Input() id?: null | number;

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.id);
  }

}
