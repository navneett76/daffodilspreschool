import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogfromComponent } from './blogfrom.component';

describe('BlogfromComponent', () => {
  let component: BlogfromComponent;
  let fixture: ComponentFixture<BlogfromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogfromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
