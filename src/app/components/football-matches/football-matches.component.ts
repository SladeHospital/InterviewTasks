import { FootballService } from '../../services/football-matches.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FootballMatch } from 'src/app/interfaces/match-interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-football-matches',
  templateUrl: './football-matches.component.html',
  styleUrls: ['./football-matches.component.css']
})

export class FootballMatchesComponent implements OnInit, OnDestroy {
  noMatches = false;
  matchList: FootballMatch[] = [];
  errorMessage = '';
  sub!: Subscription;

  constructor(private footballService: FootballService) {}

  getMatches(year: number): void {
    this.sub = this.footballService.getMatchesByYear(year)
    // This use of .subscribe is not actually deprecated
    // tslint:disable-next-line: deprecation
    .subscribe({
      next: matches => {
        this.matchList = matches;
        this.noMatches = this.matchList.length <= 0;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnInit(): void {
    // this.sub = this.footballService.getMatchesByYear(year)
    // // This use of .subscribe is not actually deprecated
    // // tslint:disable-next-line: deprecation
    // .subscribe({
    //   next: matches => this.matchList = matches,
    //   error: err => this.errorMessage = err
    // });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
