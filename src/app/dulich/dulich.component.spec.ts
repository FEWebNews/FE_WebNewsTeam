import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DulichComponent } from './dulich.component';

describe('DulichComponent', () => {
  let component: DulichComponent;
  let fixture: ComponentFixture<DulichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DulichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DulichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
