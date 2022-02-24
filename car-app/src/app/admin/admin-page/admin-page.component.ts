import { Component, OnInit } from '@angular/core';
import {LoginButtonService} from "../../services/login-button.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.less']
})
export class AdminPageComponent implements OnInit {
  access:boolean;
  token:any;
  constructor( private loginButton: LoginButtonService, private authService: AuthService) {
    this.access=false;
    this.token=localStorage.getItem("auth_token");
    console.log(this.token)
  }

  ngOnInit(): void {
    if(this.token !== null){
      this.access=!this.access;
    }
    this.loginButton.changeButton(this.access);
  }

  ngOnDestroy(){
    this.authService.logout();
    this.access=false;
    this.loginButton.changeButton(this.access);
  }

}
