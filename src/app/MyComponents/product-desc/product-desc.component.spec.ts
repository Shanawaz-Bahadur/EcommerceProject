import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescComponent } from './product-desc.component';

describe('ProductDescComponent', () => {
  let component: ProductDescComponent;
  let fixture: ComponentFixture<ProductDescComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDescComponent]
    });
    fixture = TestBed.createComponent(ProductDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
