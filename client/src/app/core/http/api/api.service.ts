import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {IProduct} from "../../../shared/models/IProduct";
import {handleError} from "../handleError";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _url: string = 'https://try-app-exp.herokuapp.com/products';

  constructor(private http: HttpClient) {
  }

  getAllProductsFromCategory(category: string) {
    return this.http.get(`${this._url}/${category}`)
      .pipe(
        retry(3),
        catchError(handleError)
      );
  }

  getAllProducts(): Observable<any> {
    return this.http.get<IProduct[]>(`${this._url}`)
      .pipe(
        retry(3),
        catchError(handleError)
      );
  }

  getProduct(id: string, category: string): Observable<any> {
    return this.http.get<IProduct>(`${this._url}/${category}/${id}`)
      .pipe(
        retry(6),
        catchError(handleError)
      );
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this._url}/${id}`)
      .pipe(
        retry(3),
        catchError(handleError)
      );
  }

  editProduct(id: string, data: any): Observable<any> {
    return this.http.put(`${this._url}/${id}`, data)
      .pipe(
        catchError(handleError)
      );
  }

  createProduct(data: any): Observable<any> {
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

    return this.http.post(this._url, data, options)
      .pipe(
        catchError(handleError)
      );
  }
}
