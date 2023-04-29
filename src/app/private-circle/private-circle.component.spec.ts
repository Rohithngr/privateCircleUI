import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCircleComponent } from './private-circle.component';

describe('PrivateCircleComponent', () => {
  let component: PrivateCircleComponent;
  let fixture: ComponentFixture<PrivateCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
