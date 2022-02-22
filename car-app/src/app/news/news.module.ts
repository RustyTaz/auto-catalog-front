import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page/news-page.component';
import {NewsApiService} from "../services/news-api.service";
import { NewsContainerComponent } from './news-container/news-container.component';
import { NewsYanPageComponent } from './news-yan-page/news-yan-page.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";


@NgModule({
  declarations: [
    NewsPageComponent,
    NewsContainerComponent,
    NewsYanPageComponent
  ],
    imports: [
        CommonModule,
        MatSlideToggleModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        MatProgressBarModule
    ]
})
export class NewsModule { }
