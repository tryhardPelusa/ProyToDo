import { TestBed } from '@angular/core/testing';

import { BorradoTareaService } from './borrado-tarea.service';

describe('BorradoTareaService', () => {
  let service: BorradoTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorradoTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
