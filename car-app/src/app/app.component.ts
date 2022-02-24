import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FeedbackFormComponent} from "./user-feedback/feedback-form/feedback-form.component";
import {DevInfoComponent} from "./footer/dev-info/dev-info.component";
import {AdminLoginFormComponent} from "./admin/admin-login-form/admin-login-form.component";
import {LoginButtonService} from "./services/login-button.service";
import {AuthService} from "./services/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'car-app';
  access:boolean;
  token:any;

  constructor(public dialog: MatDialog,private loginButton: LoginButtonService, private authService: AuthService) {
    this.token=localStorage.getItem("auth-token")
    this.access=false;
  }

  ngOnInit(): void {
    this.loginButton.log$.subscribe((access)=>this.access=access);
  }

  openModalDevInfo(): void {
    const dialogRef = this.dialog.open(DevInfoComponent, {
      width: '360px'
    })
    dialogRef.afterClosed().subscribe();
  }

  openModalFeedback(): void {
    const dialogRef = this.dialog.open(FeedbackFormComponent, {
      width: '300px',
      height: '410px'
    })
    dialogRef.afterClosed().subscribe();
  }

  openModalLogin(): void {

    const dialogRef = this.dialog.open(AdminLoginFormComponent, {
      width: '400px',
      height: '320px'
    })
    dialogRef.afterClosed().subscribe();

  }


  logoutAdmin() {
    this.authService.logout();
    this.access=false;
    this.loginButton.log$.subscribe((access)=>this.access=access);
  }
}
