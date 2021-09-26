import { TestBed } from '@angular/core/testing';

import { WepAppServiceService } from './wep-app-service.service';

describe('WepAppServiceService', () => {
  let service: WepAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WepAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
