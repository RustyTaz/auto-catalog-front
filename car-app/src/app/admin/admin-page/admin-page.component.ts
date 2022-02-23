import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.less']
})
export class AdminPageComponent implements OnInit {
  access:boolean;
  token:any;
  constructor() {
    this.access=false;
    this.token=localStorage.getItem("auth_token");
    console.log(this.token)
  }

  ngOnInit(): void {
    if(this.token !== null){
      this.access=!this.access;
    }
  }
  ngOnDestroy(){
    localStorage.clear();
    this.access=false;
  }

}
