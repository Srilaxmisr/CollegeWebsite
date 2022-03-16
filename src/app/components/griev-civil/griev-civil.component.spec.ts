import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievCIVILComponent } from './griev-civil.component';

describe('GrievCIVILComponent', () => {
  let component: GrievCIVILComponent;
  let fixture: ComponentFixture<GrievCIVILComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrievCIVILComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievCIVILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
