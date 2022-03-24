import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerGuideComponent } from './server-guide.component';

describe('ServerGuideComponent', () => {
  let component: ServerGuideComponent;
  let fixture: ComponentFixture<ServerGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
