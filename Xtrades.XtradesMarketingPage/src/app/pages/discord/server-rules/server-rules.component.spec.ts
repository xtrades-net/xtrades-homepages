import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerRulesComponent } from './server-rules.component';

describe('ServerRulesComponent', () => {
  let component: ServerRulesComponent;
  let fixture: ComponentFixture<ServerRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
