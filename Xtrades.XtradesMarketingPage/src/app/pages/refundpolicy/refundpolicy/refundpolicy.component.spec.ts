import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundpolicyComponent } from './refundpolicy.component';

describe('RefundpolicyComponent', () => {
  let component: RefundpolicyComponent;
  let fixture: ComponentFixture<RefundpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundpolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
