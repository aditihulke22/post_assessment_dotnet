import { TestBed } from '@angular/core/testing';

import { IpoDetailsService } from './ipo-details.service';

describe('IpoDetailsService', () => {
  let service: IpoDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpoDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
