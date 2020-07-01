import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';

class HttpOptions {
  url: string;
  params?: object;
  success?: any;
  fail?: any;
  complete?: any;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private message: NzMessageService) {}

  //  GET请求
  get(options: HttpOptions) {
    let params = new HttpParams();
    for (const index of Object.keys(options.params || {})) {
      params = params.set(index, options.params[index]);
    }
    this.http.get(this.baseUrl + options.url, { params }).subscribe(
      (res) => {
        if (options.success) {
          options.success(res);
        }
        if (options.complete) {
          options.complete();
        }
      },
      (error) => {
        this.message.error(error.error.message || '');
        if (options.fail) {
          options.fail(error);
        }
        if (options.complete) {
          options.complete();
        }
      }
    );
  }

  //  POSTs请求
  post(options: HttpOptions) {
    this.http.post(this.baseUrl + options.url, options.params).subscribe(
      (res) => {
        if (options.success) {
          options.success(res);
        }
        if (options.complete) {
          options.complete();
        }
      },
      (error) => {
        this.message.error(error.error.message || '');
        if (options.fail) {
          options.fail(error);
        }
        if (options.complete) {
          options.complete();
        }
      }
    );
  }
}
