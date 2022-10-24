import { TestBed } from '@angular/core/testing';

import { ApiPersonajeService } from './api-personaje.service';

describe('ApiPersonajeService', () => {
  let service: ApiPersonajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPersonajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
