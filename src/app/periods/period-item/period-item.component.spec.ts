import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodItemComponent } from './period-item.component';

describe('PeriodItemComponent', () => {
  let component: PeriodItemComponent;
  let fixture: ComponentFixture<PeriodItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
