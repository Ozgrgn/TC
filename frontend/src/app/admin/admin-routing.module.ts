import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth/auth.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { PlacesEditComponent } from './places/places-edit/places-edit.component';
import { PlacesFormComponent } from './places/places-form/places-form.component';
import { PlacesListComponent } from './places/places-list/places-list.component';


const routes: Routes = [
  {path:'auth', component: AuthComponent},
  {
    path:'main', component: AdminComponent,
    children: [
      {path:"places/edit/:id",component:PlacesEditComponent},
      {path:"places/create",component:PlacesFormComponent},
      {path:"places",component:PlacesListComponent},
      {path:"categories/:mode/:id",component:CategoriesFormComponent},
      {path:"categories/:mode",component:CategoriesFormComponent},
      {path:"categories",component:CategoriesListComponent},

    ]

},
  {path:'**', redirectTo: 'auth'}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
