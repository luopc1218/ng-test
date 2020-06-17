import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private path: string[] = [];

  constructor() {
  }

  getPath(): string[] {
    return this.path;
  }

  //  更新面包屑路径
  updatePath(newPath): void {
    this.path = newPath;
  }
}
