import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderElementListComponent } from './header-element-list.component';

describe('HeaderElementListComponent', () => {
  let component: HeaderElementListComponent;
  let fixture: ComponentFixture<HeaderElementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderElementListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderElementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
