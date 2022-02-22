import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main/main-page/main-page.component";
import {NewsPageComponent} from "./news/news-page/news-page.component";
import {CatalogPageComponent} from "./catalog/catalog-page/catalog-page.component";
import {HistoryPageComponent} from "./history/history-page/history-page.component";
import {ModelPageComponent} from "./model/model-page/model-page.component";
import {NewsContainerComponent} from "./news/news-container/news-container.component";


const routes: Routes = [
  { path:'', component: MainPageComponent},
  { path:'news', component: NewsContainerComponent},
  { path:'catalog', component: CatalogPageComponent},
  { path:'history', component: HistoryPageComponent},
  { path: 'model/model-page/:id', component: ModelPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
