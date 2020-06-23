import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-registered',
  templateUrl: './login-registered.component.html',
  styleUrls: ['./login-registered.component.scss'],
})
export class LoginRegisteredComponent implements OnInit {
  registeredForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.registeredForm = this.fb.group({});
  }

  back(): void {
    this.router.navigateByUrl('/login');
  }
}
