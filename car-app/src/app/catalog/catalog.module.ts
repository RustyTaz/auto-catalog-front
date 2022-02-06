import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CatalogPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CatalogModule { }
