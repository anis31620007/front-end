import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupOrdonnanceComponent } from './popup-ordonnance.component';

describe('PopupOrdonnanceComponent', () => {
  let component: PopupOrdonnanceComponent;
  let fixture: ComponentFixture<PopupOrdonnanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupOrdonnanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupOrdonnanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
