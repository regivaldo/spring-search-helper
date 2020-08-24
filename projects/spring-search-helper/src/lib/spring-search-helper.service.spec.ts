import { TestBed } from '@angular/core/testing';

import { SpringSearchHelperService } from './spring-search-helper.service';

describe('SpringSearchHelperService', () => {
  let service: SpringSearchHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringSearchHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
