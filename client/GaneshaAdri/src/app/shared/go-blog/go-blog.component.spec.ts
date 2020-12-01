import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBlogComponent } from './go-blog.component';

describe('GoBlogComponent', () => {
  let component: GoBlogComponent;
  let fixture: ComponentFixture<GoBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
