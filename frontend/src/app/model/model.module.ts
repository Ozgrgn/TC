import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { PlaceRepository } from './place.repository';
import { CategoryRepository } from './category.repository';
import { RestService } from './rest.service';
import { AuthService } from './auth.service';


@NgModule({
    imports: [HttpClientModule],
    providers: [RestService, PlaceRepository,CategoryRepository,AuthService]
})
export class ModelModule {}
