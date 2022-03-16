import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievCSEComponent } from './griev-cse.component';

describe('GrievCSEComponent', () => {
  let component: GrievCSEComponent;
  let fixture: ComponentFixture<GrievCSEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrievCSEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievCSEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
