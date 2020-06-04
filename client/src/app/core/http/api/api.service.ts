import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {IProduct} from "../../../shared/models/IProduct";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _url: string = ' http://localhost:3000/products';

  constructor(private http: HttpClient) {
  }

  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  };

  getAllProductsFromCategory(category: string) {
    return this.http.get(`${this._url}/${category}`)
      .pipe(
        retry(3),
        catchError(this._handleError)
      );
  }

  getAllProducts(): Observable<any> {
    return this.http.get<IProduct[]>(`${this._url}`)
      .pipe(
        retry(3),
        catchError(this._handleError)
      );
  }

  getProduct(id: string, category: string): Observable<any> {
    return this.http.get<IProduct>(`${this._url}/${category}/${id}`)
      .pipe(
        retry(6),
        catchError(this._handleError)
      );
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this._url}/${id}`)
      .pipe(
        retry(3),
        catchError(this._handleError)
      );
  }

  editProduct(id: string, data: any): Observable<any> {
    return this.http.put(`${this._url}/${id}`, data)
      .pipe(
        catchError(this._handleError)
      );
  }
}
