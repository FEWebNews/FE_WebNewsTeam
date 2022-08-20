import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuckhoeComponent } from './suckhoe.component';

describe('SuckhoeComponent', () => {
  let component: SuckhoeComponent;
  let fixture: ComponentFixture<SuckhoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuckhoeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuckhoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
