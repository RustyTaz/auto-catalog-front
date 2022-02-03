import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FeedbackFormComponent} from "./user-feedback/feedback-form/feedback-form.component";
import {DevInfoComponent} from "./footer/dev-info/dev-info.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'car-app';

  constructor(public dialog: MatDialog) {
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
}
