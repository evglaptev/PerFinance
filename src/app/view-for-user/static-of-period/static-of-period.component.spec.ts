import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticOfPeriodComponent } from './static-of-period.component';

describe('StaticOfPeriodComponent', () => {
  let component: StaticOfPeriodComponent;
  let fixture: ComponentFixture<StaticOfPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticOfPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticOfPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
