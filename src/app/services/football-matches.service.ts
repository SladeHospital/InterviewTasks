import { FootballMatchData, FootballMatch } from './../interfaces/match-interface';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, range, throwError } from 'rxjs';
import { map, filter, catchError, tap, switchMap } from 'rxjs/operators';
import { errorMonitor } from 'node:events';

@Injectable({
  providedIn: 'root'
})

export class FootballService {
  matches = new Array<FootballMatchData>();
  private footballUrl = 'https://jsonmock.hackerrank.com/api/football_competitions';
  // 'https://jsonmock.hackerrank.com/api/football_competitions?year='

  constructor(private http: HttpClient) {}

  getMatchesByYear(year: number): Observable<FootballMatchData[]>{
    return this.http.get<FootballMatch>(this.footballUrl + `?year=${year}`)
    .pipe(
      tap(rawData => console.log(rawData)),
      map(rawData => rawData.data),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never>{
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
