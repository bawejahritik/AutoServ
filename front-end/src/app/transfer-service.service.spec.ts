import { TestBed } from '@angular/core/testing';

import { TransfereServiceService } from './transfer-service.service';

describe('TransfereServiceService', () => {
  let service: TransfereServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransfereServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
