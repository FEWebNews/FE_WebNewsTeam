import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YkienComponent } from './ykien.component';

describe('YkienComponent', () => {
  let component: YkienComponent;
  let fixture: ComponentFixture<YkienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YkienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YkienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
