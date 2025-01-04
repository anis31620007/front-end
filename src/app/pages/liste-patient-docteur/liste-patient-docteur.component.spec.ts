import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePatientDocteurComponent } from './liste-patient-docteur.component';

describe('ListePatientDocteurComponent', () => {
  let component: ListePatientDocteurComponent;
  let fixture: ComponentFixture<ListePatientDocteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListePatientDocteurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePatientDocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
