import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SohoaComponent } from './sohoa.component';

describe('SohoaComponent', () => {
  let component: SohoaComponent;
  let fixture: ComponentFixture<SohoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SohoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SohoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
