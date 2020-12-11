import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/model/place.model';
import { PlaceRepository } from 'src/app/model/place.repository';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {

  constructor(private placeRepository: PlaceRepository) { }

  ngOnInit(): void {
  }

  getPlaces(): Place[] {
    return this.placeRepository.getPlaces()
  }
  deletePlace(place: Place) {
    this.placeRepository.deletePlace(place._id); 
  }
}
