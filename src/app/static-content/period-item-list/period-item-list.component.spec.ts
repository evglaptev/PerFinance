import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodItemListComponent } from './period-item-list.component';

describe('PeriodItemListComponent', () => {
  let component: PeriodItemListComponent;
  let fixture: ComponentFixture<PeriodItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
