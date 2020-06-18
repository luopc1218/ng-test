import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  public path: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor() {
  }

}
