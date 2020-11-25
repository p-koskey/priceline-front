import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidcarsComponent } from './midcars.component';

describe('MidcarsComponent', () => {
  let component: MidcarsComponent;
  let fixture: ComponentFixture<MidcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidcarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
