import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';
import { Place } from 'src/app/model/place.model';
import { PlaceRepository } from 'src/app/model/place.repository';
import { RestService } from 'src/app/model/rest.service';

@Component({
  selector: 'app-places-form',
  templateUrl: './places-form.component.html',
  styleUrls: ['./places-form.component.scss'],
})
export class PlacesFormComponent implements OnInit {
  editing: boolean = false;
  place: Place = new Place();
  categories: Category[];
  selectedCategory: String;
  uploadImages: Object[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private placeRepository: PlaceRepository,
    private restService: RestService,
    private categoryRepository: CategoryRepository,
    private router: Router
  ) {
    this.restService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));

    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      this.place = placeRepository.getPlace(activeRoute.snapshot.params['id']);
    }
  }

  ngOnInit(): void {}

  save(form: NgForm) {
    this.restService
      .uploadImage(this.uploadImages)
      .toPromise()
      .then((res) => {
        let mainImage: any = undefined;

        this.uploadImages.map((upImage) => {
          if (upImage['mainImage']) {
            mainImage = upImage['file']['name'];
          }
        });

        res['images'].map((image, index) => {
          if (image == mainImage) {
            this.place.images = [
              ...this.place.images,
              { image, mainImage: true },
            ];
          } else {
            this.place.images = [...this.place.images, { image }];
          }
        });

        this.placeRepository.savePlace(this.place);
        this.router.navigateByUrl('/admin/main/places');
      });
  }

  addImage() {
    this.uploadImages = [...this.uploadImages, {}];
  }

  removeSelectedImage(index: number) {
    this.uploadImages.splice(index, 1);
  }
  removeImage(index: number) {
    this.place.images.splice(index, 1);
  }
  selectImage(file: FileList, index: number) {
    this.uploadImages[index]['file'] = file[0];
    console.log(file[0]);
  }

  setMainImage(index: number) {
    this.uploadImages[index]['mainImage'] = true;
    this.uploadImages.map((image, i) => {
      if (index != i) {
        delete this.uploadImages[i]['mainImage'];
      }
    });
  }
}
