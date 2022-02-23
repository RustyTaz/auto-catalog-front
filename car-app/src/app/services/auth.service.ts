import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

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

      })
  }
}
