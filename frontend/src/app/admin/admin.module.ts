import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlacesListComponent } from './places/places-list/places-list.component';
import { PlacesFormComponent } from './places/places-form/places-form.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { PlacesEditComponent } from './places/places-edit/places-edit.component';



@NgModule({
  declarations: [AdminComponent,AuthComponent, PlacesListComponent, PlacesFormComponent, CategoriesListComponent, CategoriesFormComponent, PlacesEditComponent,],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
