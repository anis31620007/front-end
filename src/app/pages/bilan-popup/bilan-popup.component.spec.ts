import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanPopupComponent } from './bilan-popup.component';

describe('BilanPopupComponent', () => {
  let component: BilanPopupComponent;
  let fixture: ComponentFixture<BilanPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BilanPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilanPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
