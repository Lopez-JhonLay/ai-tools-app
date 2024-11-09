import { TestBed } from '@angular/core/testing';

import { MoodAnalysisService } from './mood-analysis.service';

describe('MoodAnalysisService', () => {
  let service: MoodAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoodAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
