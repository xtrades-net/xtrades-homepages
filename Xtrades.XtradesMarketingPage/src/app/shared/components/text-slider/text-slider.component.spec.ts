import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSliderComponent } from './text-slider.component';

describe('Slider1Component', () => {
  let component: TextSliderComponent;
  let fixture: ComponentFixture<TextSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextSliderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
