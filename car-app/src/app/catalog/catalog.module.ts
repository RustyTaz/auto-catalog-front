import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogPageComponent} from './catalog-page/catalog-page.component';
import {RouterModule} from '@angular/router';
import {ModelModule} from "../model/model.module";

@NgModule({
  declarations: [
    CatalogPageComponent
  ],
  exports: [
    CatalogPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModelModule
  ]
})
export class CatalogModule {
}
