import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {IProduct} from "../../../shared/models/IProduct";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = ' http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  };


  getAllProducts(): Observable<Array<IProduct>> {
    return this.http.get<Array<IProduct>>(`${this.url}/products`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  getProducts(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}/products/${id}`)
      .pipe(
        retry(6),
        catchError(this.handleError)
      );
  }
}
