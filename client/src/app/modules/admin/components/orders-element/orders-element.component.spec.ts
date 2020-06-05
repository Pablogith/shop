import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrdersElementComponent} from './orders-element.component';

describe('OrdersElementComponent', () => {
  let component: OrdersElementComponent;
  let fixture: ComponentFixture<OrdersElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersElementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
