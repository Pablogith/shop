import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortProductsByPriceComponent } from './sort-products.component';

describe('SortProductsByPriceComponent', () => {
  let component: SortProductsByPriceComponent;
  let fixture: ComponentFixture<SortProductsByPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortProductsByPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortProductsByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
