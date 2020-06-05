import {throwError} from "rxjs";

export function handleError(error) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(`Backend returned code ${error.status}`);
  }
  return throwError(error.error.errors);
};
