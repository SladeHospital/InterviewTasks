/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FootballService } from './football-matches.service';

describe('Service: FootballService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootballService]
    });
  });

  it('should ...', inject([FootballService], (service: FootballService) => {
    expect(service).toBeTruthy();
  }));
});
