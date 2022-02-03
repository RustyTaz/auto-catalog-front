import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dev-info',
  templateUrl: './dev-info.component.html',
  styleUrls: ['./dev-info.component.less']
})
export class DevInfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DevInfoComponent>) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
