import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierpatientsComponent } from './dossierpatients.component';

describe('DossierpatientsComponent', () => {
  let component: DossierpatientsComponent;
  let fixture: ComponentFixture<DossierpatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DossierpatientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DossierpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
