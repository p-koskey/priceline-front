import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargecarsComponent } from './largecars.component';

describe('LargecarsComponent', () => {
  let component: LargecarsComponent;
  let fixture: ComponentFixture<LargecarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargecarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargecarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
