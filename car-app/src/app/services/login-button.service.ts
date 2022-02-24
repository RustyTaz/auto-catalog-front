import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginButtonService {
  public log$ = new Subject<boolean>();
  public pass$ = new Subject<any>();
  constructor() {
  }

  public changeButton(access: boolean) {
    this.log$.next(access);
  }
  public checkPassword(password: any) {
    this.pass$.next(password);
  }
}
