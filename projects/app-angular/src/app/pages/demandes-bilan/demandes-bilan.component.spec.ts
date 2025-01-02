import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesBilanComponent } from './demandes-bilan.component';

describe('DemandesBilanComponent', () => {
  let component: DemandesBilanComponent;
  let fixture: ComponentFixture<DemandesBilanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandesBilanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandesBilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
