import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaoducComponent } from './giaoduc.component';

describe('GiaoducComponent', () => {
  let component: GiaoducComponent;
  let fixture: ComponentFixture<GiaoducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiaoducComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaoducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
