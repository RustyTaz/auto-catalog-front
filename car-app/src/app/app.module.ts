import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CatalogModule} from "./catalog/catalog.module";
import {HistoryModule} from "./history/history.module";
import {MainModule} from "./main/main.module";
import {NewsModule} from "./news/news.module";
import {UserFeedbackModule} from "./user-feedback/user-feedback.module";

import {HttpClientModule} from "@angular/common/http";
import {NewsApiService} from "./services/news-api.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {AdminModule} from "./admin/admin.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ModelModule} from "./model/model.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogModule,
    HistoryModule,
    MainModule,
    UserFeedbackModule,
    NewsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AdminModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserModule,
    ModelModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
