import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadCIVILComponent } from './acad-civil.component';

describe('AcadCIVILComponent', () => {
  let component: AcadCIVILComponent;
  let fixture: ComponentFixture<AcadCIVILComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadCIVILComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadCIVILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
