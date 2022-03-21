import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadCivilComponent } from './acad-civil.component';

describe('AcadCivilComponent', () => {
  let component: AcadCivilComponent;
  let fixture: ComponentFixture<AcadCivilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadCivilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
