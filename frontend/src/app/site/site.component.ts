import { Component } from "@angular/core";
import { Category } from '../model/category.model';
import { CategoryRepository } from '../model/category.repository';
import { Place } from '../model/place.model';
import { PlaceRepository } from '../model/place.repository';

@Component ({
    selector: 'site',
    templateUrl:'site.component.html',
    styles:[`
    .pt-100 {padding-top:100px;}
    `]
})

export class SiteComponent {
    
    constructor (
        private placeRepository: PlaceRepository,
        private categoryRepository: CategoryRepository) {}

    get places(): Place[] {
        return this.placeRepository.getPlaces();
    }
    get categories(): Category[] {
        return this.categoryRepository.getCategories();
    }
}