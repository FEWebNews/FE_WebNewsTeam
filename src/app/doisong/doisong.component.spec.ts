import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoisongComponent } from './doisong.component';

describe('DoisongComponent', () => {
  let component: DoisongComponent;
  let fixture: ComponentFixture<DoisongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoisongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoisongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
