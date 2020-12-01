import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoAboutComponent } from './go-about.component';

describe('GoAboutComponent', () => {
  let component: GoAboutComponent;
  let fixture: ComponentFixture<GoAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
