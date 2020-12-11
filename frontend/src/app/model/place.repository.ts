import { Injectable, OnInit } from "@angular/core";
import { Place } from './place.model';
import { RestService } from './rest.service';

@Injectable()
export class PlaceRepository implements OnInit {
    private places: Place[] = [];

    constructor(private restService: RestService) {
       this.getData()
     }

     getData(){

        this.restService
        .getPlaces()
        .subscribe(places => this.places = places);
     }
    ngOnInit() {  
    }
 
    getPlace(_id: String): Place {
        return this.places.find(i => i._id == _id);
    }

    getPlaces():Place[] {
        return this.places;
    }
    savePlace(place:Place) {
        if(!place._id) {
            this.restService.addPlace (place)
                .subscribe(p=> {

                    this.getData()
                });
        } else {
            this.restService.updatePlace(place)
            .subscribe(p => {
                this.getData()
            })
        }
    }
    deletePlace(placeId: String){
        this.restService.deletePlace(placeId)
        .subscribe(p=> {
            this.getData()
        })

    }
}