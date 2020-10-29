import { TestBed } from '@angular/core/testing';

import { InterappService } from './interapp.service';

describe('InterappService', () => {
  let service: InterappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
