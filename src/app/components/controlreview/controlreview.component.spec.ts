import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlreviewComponent } from './controlreview.component';

describe('ControlreviewComponent', () => {
  let component: ControlreviewComponent;
  let fixture: ComponentFixture<ControlreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
