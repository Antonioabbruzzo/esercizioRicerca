import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaDatiComponent } from './ricerca-dati.component';

describe('RicercaDatiComponent', () => {
  let component: RicercaDatiComponent;
  let fixture: ComponentFixture<RicercaDatiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RicercaDatiComponent]
    });
    fixture = TestBed.createComponent(RicercaDatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
