import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationItemListComponent } from './operation-item-list.component';

describe('OperationItemListComponent', () => {
  let component: OperationItemListComponent;
  let fixture: ComponentFixture<OperationItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
