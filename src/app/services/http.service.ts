import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public getProducts(): Observable<Product[]> {
    //imitate back-end request
    return of([
      {
        id: '1',
        name: 'Breed Dry Dog Food',
        price: 100,
        image: 'assets/images/pet-food.png',
        rating: 3,
        reviews: 35,
        isNew: false,
      },
      {
        id: '2',
        name: 'CANON EOS DSLR Camera',
        price: 360,
        image: 'assets/images/photo.png',
        rating: 4,
        reviews: 95,
        isNew: false,
      },
      {
        id: '3',
        name: 'ASUS FHD Gaming Laptop',
        price: 700,
        image: 'assets/images/laptop.png',
        rating: 5,
        reviews: 325,
        isNew: false,
      },
      {
        id: '4',
        name: 'Curology Product Set',
        price: 500,
        image: 'assets/images/cream.png',
        rating: 4,
        reviews: 145,
        isNew: false,
      },
      {
        id: '5',
        name: 'Kids Electric Car',
        price: 960,
        image: 'assets/images/car.png',
        rating: 5,
        reviews: 65,
        isNew: true,
      },
      {
        id: '6',
        name: 'Jr. Zoom Soccer Cleats',
        price: 1160,
        image: 'assets/images/shoes.png',
        rating: 5,
        reviews: 35,
        isNew: false,
      },
      {
        id: '7',
        name: 'GP11 Shooter USB Gamepad',
        price: 660,
        image: 'assets/images/console.png',
        rating: 4.5,
        reviews: 55,
        isNew: true,
      },
      {
        id: '8',
        name: 'Quilted Satin Jacket',
        price: 660,
        image: 'assets/images/jacket.png',
        rating: 4.5,
        reviews: 55,
        isNew: false,
      },
    ]).pipe(delay(500));
  }
}
