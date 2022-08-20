import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThegioiComponent } from './thegioi.component';

describe('ThegioiComponent', () => {
  let component: ThegioiComponent;
  let fixture: ComponentFixture<ThegioiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThegioiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThegioiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
