import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {AuthService} from "../../services/auth.service";
import {MatDialogRef} from "@angular/material/dialog";
import {LoginButtonService} from "../../services/login-button.service";


@Component({
  selector: 'app-admin-login-form',
  templateUrl: './admin-login-form.component.html',
  styleUrls: ['./admin-login-form.component.less']
})
export class AdminLoginFormComponent implements OnInit {

  loginAdminForm!: FormGroup;
  hide: boolean;
  rightAccess: boolean = false;
  error: string = "";

  constructor(private authService: AuthService, private dialogRef: MatDialogRef<AdminLoginFormComponent>, private loginButton: LoginButtonService) {
    this._createForm()

    this.hide = true;
  }

  private _createForm() {
    this.loginAdminForm = new FormGroup({
      login: new FormControl([], [Validators.required]),
      password: new FormControl([], [Validators.required]),
    })

  }

  ngOnInit(): void {
  }


  loginAdmin() {
    let {login, password} = this.loginAdminForm.value;
    console.log(login, password);
    this.authService.login(login, password);
    this.dialogRef.close();
  }
}
