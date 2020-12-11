import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from './place.model';
import { Category } from './category.model';
import {map} from 'rxjs/operators';

@Injectable()

export class RestService {
  apiUrl:string = 'http://localhost:3000/';
  token: string;

  constructor(private http: HttpClient) { }

getPlaces():Observable<Place[]> {
  return this.http.get<Place[]>(this.apiUrl + 'places');
}


getCategories(): Observable<Category[]> {
  return this.http.get<Category[]>(this.apiUrl + 'categories');
}

addPlace(place: Place):Observable<Place> {
  
  return this.http.post<Place>(this.apiUrl+"places", place );
}

addCategory (category: Category):Observable<Place> {
  return this.http.post <Category>(this.apiUrl+"categories",category);
}

updatePlace(place: Place):Observable<Place> {
  return this.http.put<Place>( `${this.apiUrl}place`, {place}) ;
}

updateCategory (category:Category): Observable<Place> {
  return this.http.put<Category>(`${this.apiUrl}category`,{category});
}

deletePlace ( placeId: String): Observable<Place> {
  return this.http.delete<Place>(`${this.apiUrl}place/${placeId}`)
}

deleteCategory (categoryId: String):Observable<Category> {
  return this.http.delete<Category>(`${this.apiUrl}category/${categoryId}`)
}

authentication(username:string, password: string) : Observable<boolean> {
  return this.http.post<any>(this.apiUrl + 'login' ,{
    username: username,
    password: password
  }) .pipe(map(response => {
    this.token =response.sucess ? response.token : null;
    console.log;(this.token);
    return response.sucess;

  }));
}


uploadImage(images: Object[]) {
  let formData: FormData = new FormData();
  images.map((image , index) => {
     
    formData.append(`images`, image['file'])
    if(index === images.length - 1) {
     
    }
  })

 return this.http.post(`${this.apiUrl}upload-image`, formData);
}


mainImage(images: Object[]) {
  let formData: FormData = new FormData();
  

 return this.http.post(`${this.apiUrl}upload-image`, formData);
}
}

