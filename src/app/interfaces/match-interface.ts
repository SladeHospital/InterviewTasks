export interface FootballMatch {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: FootballMatchData[];
}

export interface FootballMatchData {
    name: string;
    country: string;
    year: number;
    winner: string;
    runnerUp: string;
}
