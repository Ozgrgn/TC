import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { SiteComponent } from './site.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';

@NgModule({
    imports: [ModelModule,BrowserModule,FormsModule],
    declarations:[SiteComponent, NavbarComponent, PlaceDetailComponent],
    exports: [SiteComponent,PlaceDetailComponent]
})
export class SiteModule {}
