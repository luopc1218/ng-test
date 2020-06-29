import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ConfigService} from '../../../config.service';

@Component({
  selector: 'app-login-registered',
  templateUrl: './login-registered.component.html',
  styleUrls: ['./login-registered.component.scss'],
})
export class LoginRegisteredComponent implements OnInit {
  registeredForm!: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private router: Router, private request: ConfigService) {
  }

  ngOnInit(): void {
    this.registeredForm = this.fb.group({});
  }

  submit(): void {
    this.loading = true;
    this.request.get({
      url: '/test',
      params: {
        test: 'test',
        test2: 'test2'
      },
      success: (res) => {
        console.log(res);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  back(): void {
    this.router.navigateByUrl('/login');
  }
}
