import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProAlgoComponent } from './pro-algo.component';

describe('ProAlgoComponent', () => {
  let component: ProAlgoComponent;
  let fixture: ComponentFixture<ProAlgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProAlgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
