import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

import {Cake} from "../../shared/models/cake";
import {environment} from "../../../environments/environment";

@Injectable()
export class CakeService {
  private readonly productsUri = 'assets/data/products.json';

  constructor(private http: HttpClient) {
  }

  getProducts$(): Observable<Cake[]> {
    return this.http.get<Cake[]>(
      `${environment.productsUrl}/${this.productsUri}`
    );
  }
}
