import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Observable} from "rxjs";
import {handleError} from "../handleError";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private _url: string = 'https://try-app-exp.herokuapp.com/orders';
  private _urlProd: string = 'https://try-app-exp.herokuapp.com/basketProduct';

  constructor(private http: HttpClient) {
  }

  getAllOrders(): Observable<any> {
    return this.http.get(this._url)
      .pipe(
        catchError(handleError)
      );
  }

  getOrder(id: string): Observable<any> {
    return this.http.get(`${this._url}/${id}`)
      .pipe(
        catchError(handleError)
      );
  }

  createOrder(order: object): Observable<any> {
    return this.http.post(this._url, order)
      .pipe(
        catchError(handleError)
      );
  }

  getProductFromOrder(id: string): Observable<any> {
    return this.http.get(`${this._urlProd}/${id}`)
      .pipe(
        catchError(handleError)
      );
  }
}
