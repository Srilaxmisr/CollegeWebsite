import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadEcComponent } from './acad-ec.component';

describe('AcadEcComponent', () => {
  let component: AcadEcComponent;
  let fixture: ComponentFixture<AcadEcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadEcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadEcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
