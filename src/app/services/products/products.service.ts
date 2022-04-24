import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from 'src/app/interfaces/products.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private API_URL: string =
    'https://makeup-api.herokuapp.com/api/v1/products.json';

  private searchTerm = new Subject<Object>();

  sendSearchTerm(term: any, prop: any) {
    this.searchTerm.next({ termino: term, propiedad: prop });
  }

  getSearchTerm(): Observable<Object> {
    return this.searchTerm.asObservable();
  }

  fetchAllProducts() {
    return this.http.get<Products[]>(this.API_URL);
  }

  constructor(private http: HttpClient) {}
}
