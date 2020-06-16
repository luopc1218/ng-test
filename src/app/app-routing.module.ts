import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {LoginFormComponent} from './pages/login/login-form/login-form.component';
import {LoginRegisteredComponent} from './pages/login/login-registered/login-registered.component';
import {HomeComponent} from './pages/home/home.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {Test11Component} from './pages/home/children/test11/test11.component';
import {Test12Component} from './pages/home/children/test12/test12.component';
import {Test2Component} from './pages/home/children/test2/test2.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent, children: [
      {path: '', component: LoginFormComponent},
      {path: 'registered', component: LoginRegisteredComponent},
    ]
  },
  {
    path: 'home', component: HomeComponent, children: [
      {path: 'test11', component: Test11Component, data: {path: ['标题1', '标题1-1']}},
      {path: 'test12', component: Test12Component, data: {path: ['标题1', '标题1-2']}},
      {path: 'test2', component: Test2Component, data: {path: ['标题2', '标题2']}},
    ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
