import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CatalogPageComponent} from "./catalog/catalog-page/catalog-page.component";
import {MainPageComponent} from "./main/main-page/main-page.component";
import {HistoryPageComponent} from "./history/history-page/history-page.component";
import {RouterModule} from "@angular/router";
import {CatalogModule} from "./catalog/catalog.module";

import {HistoryModule} from "./history/history.module";
import {MainModule} from "./main/main.module";
import {NewsModule} from "./news/news.module";
import {NewsPageComponent} from "./news/news-page/news-page.component";

import {HttpClientModule} from "@angular/common/http";
import {NewsApiService} from "./services/news-api.service";



const routes =[
  { path:'', component: MainPageComponent},
  { path:'news', component: NewsPageComponent},
  { path:'catalog', component: CatalogPageComponent},
  { path:'history', component: HistoryPageComponent},]

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    CatalogModule,
    HistoryModule,
    MainModule,
    NewsModule,
    HttpClientModule,

  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
