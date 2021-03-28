import { FootballService } from '../../services/football-matches.service';
import { Component, OnInit } from '@angular/core';
import { FootballMatch } from 'src/app/interfaces/match-interface';

@Component({
  selector: 'app-football-matches',
  templateUrl: './football-matches.component.html',
  styleUrls: ['./football-matches.component.css']
})
export class FootballMatchesComponent implements OnInit {
  noMatches = false;
  matchList: FootballMatch[] = [];

  constructor(private footballService: FootballService) {}

  getMatchesByYear(year: number): void{
    this.matchList = this.footballService.getMatches(year);
  }

  ngOnInit(): void {}
}
