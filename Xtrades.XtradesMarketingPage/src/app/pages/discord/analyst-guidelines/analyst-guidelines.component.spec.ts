import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystGuidelinesComponent } from './analyst-guidelines.component';

describe('AnalystGuidelinesComponent', () => {
  let component: AnalystGuidelinesComponent;
  let fixture: ComponentFixture<AnalystGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalystGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
