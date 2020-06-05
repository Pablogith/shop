import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Observable} from "rxjs";
import {handleError} from "../handleError";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private _url: string = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) {
  }

  getAllOrders(): Observable<any> {
    return this.http.get(this._url)
      .pipe(
        catchError(handleError)
      );
  }
}
