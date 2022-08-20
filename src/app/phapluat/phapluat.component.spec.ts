import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhapluatComponent } from './phapluat.component';

describe('PhapluatComponent', () => {
  let component: PhapluatComponent;
  let fixture: ComponentFixture<PhapluatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhapluatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhapluatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
