export interface RawFootballResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: FootballMatch[];
}

export interface FootballMatch {
    name: string;
    country: string;
    year: number;
    winner: string;
    runnerUp: string;
}
