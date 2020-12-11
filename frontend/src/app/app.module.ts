import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SiteModule } from './site/site.module';
import { RouterModule } from '@angular/router';
import { SiteComponent } from './site/site.component';
import { PlaceDetailComponent } from './site/place-detail/place-detail.component';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SiteModule,
    RouterModule.forRoot([
      {path: 'site', component : SiteComponent},
      {path: 'placedetail', component : PlaceDetailComponent},
      {path:'admin', loadChildren :() => import('src/app/admin/admin.module').then(m => m.AdminModule)},
      {path: '**', redirectTo : "/site"}
    ])
    // AppRoutingModule, 
    // HttpClientModule, 
    // FormsModule,
    // RouterModule.forRoot([
    //   {path:'admin',loadChildren : './admin/admin.module@AdminModule'}
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
