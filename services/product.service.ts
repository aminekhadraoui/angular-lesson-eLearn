import { Injectable } from '@angular/core';
import { CATALOGUE } from '../shared/mock-data/catalogue-produits';
import { learn } from '../shared/models/learn';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts(): learn[] {
return CATALOGUE;
}
}
