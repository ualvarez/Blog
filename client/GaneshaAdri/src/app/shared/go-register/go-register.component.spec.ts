import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoRegisterComponent } from './go-register.component';

describe('GoRegisterComponent', () => {
  let component: GoRegisterComponent;
  let fixture: ComponentFixture<GoRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
