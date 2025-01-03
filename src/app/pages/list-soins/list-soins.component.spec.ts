import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSoinsComponent } from './list-soins.component';

describe('ListSoinsComponent', () => {
  let component: ListSoinsComponent;
  let fixture: ComponentFixture<ListSoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSoinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
