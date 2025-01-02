import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSoinsComponent } from './popup-soins.component';

describe('PopupSoinsComponent', () => {
  let component: PopupSoinsComponent;
  let fixture: ComponentFixture<PopupSoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupSoinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupSoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
