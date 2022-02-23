import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:8080/auth/login';
  token: any;

  constructor(private http: HttpClient,private router: Router) { }

  login(login: string, password: string) {
    this.http.post(this.uri, {login: login,password: password})
      .subscribe((resp: any) => {
        this.router.navigate(['admin_page']);
        localStorage.setItem('auth_token', resp.token);
        console.log(resp.token);

      },  (error) => {
        console.log(error.error.errorMessage)
        return throwError(error)
      })
  }

  // login2(login: string, password: string){
  //   return this.http.post(this.uri, {login: login,password: password})
  // }

  logout() {
    localStorage.removeItem('auth_token');
  }

  isLogin(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }
}
