import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePatientInfermierComponent } from './liste-patient-infermier.component';

describe('ListePatientInfermierComponent', () => {
  let component: ListePatientInfermierComponent;
  let fixture: ComponentFixture<ListePatientInfermierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListePatientInfermierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePatientInfermierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
