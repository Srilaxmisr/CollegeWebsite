import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievAUTOComponent } from './griev-auto.component';

describe('GrievAUTOComponent', () => {
  let component: GrievAUTOComponent;
  let fixture: ComponentFixture<GrievAUTOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrievAUTOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievAUTOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
