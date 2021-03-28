import { FootballMatch } from '../interfaces/match-interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FootballService {
  matches = new Array<FootballMatch>();

  getMatches(year: number): FootballMatch[]{
    // this.axios.get('https://jsonmock.hackerrank.com/api/football_competitions?year=' + year)
    // .then((response: any) => {
    //   console.log('Success');
    //   this.matchList = [];
    //   const returnedMatches = response.data.data;
    //   returnedMatches.forEach((match: any) => {
    //     this.matchList.push(new FootballMatchClass(match));
    //   });
    //   this.noMatches = !(this.matchList.length > 0);

    //   console.log(this.matchList);
    // })
    // .catch((error: any) => {
    //   console.log(error);
    //   this.matchList = [];
    //   this.noMatches = true;
    // });

    return this.matches;
  }

  constructor() { }

}
