import { Component, OnInit } from '@angular/core';
import { FootballMatch } from "./football-match";

@Component({
  selector: 'football-matches',
  templateUrl: './football-matches.component.html',
  styleUrls: ['./football-matches.component.css']
})
export class FootballMatchesComponent implements OnInit {
  constructor() { }
  noMatches: boolean = false;
  matchList: FootballMatch[] = [];

  axios = require('axios');
  getYear(year: number){
    this.axios.get('https://jsonmock.hackerrank.com/api/football_competitions?year=' + year)
    .then((response: any) => {
      console.log("Success");
      this.matchList = [];
      const returnedMatches = response.data.data;
      returnedMatches.forEach((match: any) => {
        this.matchList.push(new FootballMatch(match));
      });

      if(this.matchList.length > 0){
        this.noMatches = false;
      }
      else{
        this.noMatches = true;
      }

      console.log(this.matchList);
    })
    .catch((error: any) => {
      console.log(error);
      this.matchList = [];
      this.noMatches = true;
    });
  }

  ngOnInit() {
  }

}
