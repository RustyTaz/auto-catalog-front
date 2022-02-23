import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {AuthService} from "../../services/auth.service";
import {MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-admin-login-form',
  templateUrl: './admin-login-form.component.html',
  styleUrls: ['./admin-login-form.component.less']
})
export class AdminLoginFormComponent implements OnInit {

  loginAdminForm!: FormGroup;
  hide: boolean;


  constructor(private authService: AuthService,private dialogRef: MatDialogRef<AdminLoginFormComponent>) {
    this._createForm()

    this.hide=true;
  }

  private _createForm() {
    this.loginAdminForm = new FormGroup({
      login: new FormControl([],[Validators.required]),
      password: new FormControl([],[Validators.required]),
    })

  }

  ngOnInit(): void {
  }



  loginAdmin() {
    let {login,password}=this.loginAdminForm.value;
    console.log(login,password);
    try {
      this.authService.login(login,password);
    }catch (e){
      console.log(e)
    }


    this.dialogRef.close()

  }
}
