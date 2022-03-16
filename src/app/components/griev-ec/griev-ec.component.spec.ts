import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievECComponent } from './griev-ec.component';

describe('GrievECComponent', () => {
  let component: GrievECComponent;
  let fixture: ComponentFixture<GrievECComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrievECComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievECComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
