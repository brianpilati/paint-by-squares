import { TestBed, inject } from '@angular/core/testing';

import { PaintMessageService } from './paint-message.service';

describe('PaintMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaintMessageService]
    });
  });

  it('should be created', inject([PaintMessageService], (service: PaintMessageService) => {
    expect(service).toBeTruthy();
  }));
});
