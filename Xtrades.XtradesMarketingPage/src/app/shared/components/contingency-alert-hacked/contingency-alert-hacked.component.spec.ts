import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContingencyAlertHackedComponent } from './contingency-alert-hacked.component';

describe('ContingencyAlertHackedComponent', () => {
  let component: ContingencyAlertHackedComponent;
  let fixture: ComponentFixture<ContingencyAlertHackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContingencyAlertHackedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContingencyAlertHackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
