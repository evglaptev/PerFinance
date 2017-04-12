import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewForUserComponent } from './view-for-user.component';

describe('ViewForUserComponent', () => {
  let component: ViewForUserComponent;
  let fixture: ComponentFixture<ViewForUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewForUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
