import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {LoginFormComponent} from './pages/login/login-form/login-form.component';
import {LoginRegisteredComponent} from './pages/login/login-registered/login-registered.component';
import {HomeComponent} from './pages/home/home.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent, children: [
      {path: '', component: LoginFormComponent},
      {path: 'registered', component: LoginRegisteredComponent},
    ]
  },
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
