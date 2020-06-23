import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
//  响应式表单
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
//  NzComponents
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzResultModule} from 'ng-zorro-antd/result';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
//  NzIcons
import * as AllIcons from '@ant-design/icons-angular/icons';
import {IconDefinition} from '@ant-design/icons-angular';
//  pages
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {LoginFormComponent} from './pages/login/login-form/login-form.component';
import {LoginRegisteredComponent} from './pages/login/login-registered/login-registered.component';
import {NavigatorComponent} from './pages/home/navigator/navigator.component';
import {HeaderComponent} from './pages/home/header/header.component';
import {Test11Component} from './pages/home/children/test11/test11.component';
import {Test12Component} from './pages/home/children/test12/test12.component';
import {Test2Component} from './pages/home/children/test2/test2.component';
import {EditUserInfoComponent} from './pages/home/children/test11/edit-user-info/edit-user-info.component';
import {BreadcrumbComponent} from './pages/home/breadcrumb/breadcrumb.component';

// enableProdMode();


const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginFormComponent,
    LoginRegisteredComponent,
    NavigatorComponent,
    HeaderComponent,
    Test11Component,
    Test12Component,
    Test2Component,
    EditUserInfoComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //  NzComponents
    NzIconModule.forRoot(icons),
    NzInputModule,
    NzButtonModule,
    NzFormModule,
    NzPageHeaderModule,
    NzMessageModule,
    NzLayoutModule,
    NzMenuModule,
    NzSpinModule,
    NzModalModule,
    NzResultModule,
    NzSelectModule,
    NzTableModule,
    NzPopconfirmModule,
    NzBreadCrumbModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
