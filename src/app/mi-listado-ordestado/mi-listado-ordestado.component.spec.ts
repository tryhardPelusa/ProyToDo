import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiListadoOrdestadoComponent } from './mi-listado-ordestado.component';

describe('MiListadoOrdestadoComponent', () => {
  let component: MiListadoOrdestadoComponent;
  let fixture: ComponentFixture<MiListadoOrdestadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiListadoOrdestadoComponent]
    });
    fixture = TestBed.createComponent(MiListadoOrdestadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
