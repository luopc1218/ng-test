import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

class HttpOptions {
  url: string;
  params?: object;
  success?: any;
  fail?: any;
  complete?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  //  GET请求
  get(options: HttpOptions) {
    let params = new HttpParams();
    for (const index of Object.keys(options.params || {})) {
      params = params.set(index, options.params[index]);
    }
    this.http.get(this.baseUrl + options.url, {params}).subscribe(
      res => {
        if (options.success) {
          options.success(res);
        }
        if (options.complete) {
          options.complete();
        }
      },
      error => {
        console.log('Error:', error);
        if (options.fail) {
          options.fail(error);
        }
        if (options.complete) {
          options.complete();
        }
      });
  }

  //  GET请求
  post(options: HttpOptions) {
    this.http.post(this.baseUrl + options.url, options.params).subscribe(
      res => {
        if (options.success) {
          options.success(res);
        }
        if (options.complete) {
          options.complete();
        }
      },
      error => {
        console.log('Error:', error);
        if (options.fail) {
          options.fail(error);
        }
        if (options.complete) {
          options.complete();
        }
      });
  }
}
