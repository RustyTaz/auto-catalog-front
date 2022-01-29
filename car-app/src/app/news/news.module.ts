import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page/news-page.component';
import {NewsApiService} from "../services/news-api.service";


@NgModule({
  declarations: [
    NewsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NewsModule { }
