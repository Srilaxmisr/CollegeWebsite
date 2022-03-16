import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadECComponent } from './acad-ec.component';

describe('AcadECComponent', () => {
  let component: AcadECComponent;
  let fixture: ComponentFixture<AcadECComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadECComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadECComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
