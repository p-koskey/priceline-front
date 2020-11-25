import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallcarsComponent } from './smallcars.component';

describe('SmallcarsComponent', () => {
  let component: SmallcarsComponent;
  let fixture: ComponentFixture<SmallcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallcarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
