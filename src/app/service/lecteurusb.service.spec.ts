import { TestBed } from '@angular/core/testing';

import { LecteurusbService } from './lecteurusb.service';

describe('LecteurusbService', () => {
  let service: LecteurusbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LecteurusbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
