import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoLoginComponent } from './go-login.component';

describe('GoLoginComponent', () => {
  let component: GoLoginComponent;
  let fixture: ComponentFixture<GoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
