import { Component } from '@angular/core';

@Component({
  selector: 'root',
  template: "<router-outlet></router-outlet>", 
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  // name: String;
 

  // places: any[];

  // constructor(private restService: RestService) {}

  // ngOnInit(): void {
  //   this.getData();
  // }

  // getData() {
  //   this.restService
  //     .getPlaces()
  //     .toPromise()
  //     .then((data) => {
  //       this.places = data['places'];
  //     });
  // }

  // save() {
  //   this.restService
  //     .addPlace(this.name)
  //     .toPromise()
  //     .then((data) => {
  //       this.getData();
  //     });
  // }
}
