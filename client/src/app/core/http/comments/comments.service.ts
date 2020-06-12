import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {handleError} from "../handleError";
import {Observable} from "rxjs";
import {ApiService} from "../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private _url: string = 'https://try-app-exp.herokuapp.com/comments';

  constructor(
    private apiService: ApiService,
    private http: HttpClient) { }

  getComment(id: string): Observable<any> {
    return this.http.get(`${this._url}/${id}`)
      .pipe(
        catchError(handleError)
      );
  }

  addComment(id: string, comment: object): Observable<any> {
    return this.http.post(`${this._url}/${id}`, comment)
      .pipe(
        catchError(handleError)
      );
  }
}
