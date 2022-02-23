import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {AdminLoginFormComponent} from './admin-login-form/admin-login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {GuestListComponent} from './guest-list/guest-list.component';
import {MatTableModule} from "@angular/material/table";
import {CatalogModule} from "../catalog/catalog.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    AdminPageComponent,
    AdminLoginFormComponent,
    GuestListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    CatalogModule,
    MatNativeDateModule,
    FormsModule,
    BrowserAnimationsModule
  ]
})
export class AdminModule {
}
