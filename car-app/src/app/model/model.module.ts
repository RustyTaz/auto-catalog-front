import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelPageComponent } from './model-page/model-page.component';
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    ModelPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,

  ]
})
export class ModelModule { }
