import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    FeedbackFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule
  ]
})
export class UserFeedbackModule { }
