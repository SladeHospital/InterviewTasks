export class FootballMatchClass {
  name: string;
  country: string;
  year: number;
  winner: string;
  runnerUp: string;

  constructor(response: any){
    this.name = response.name;
    this.country = response.country;
    this.year = response.year;
    this.winner = response.winner;
    this.runnerUp = response.runnerup;
  }
}
