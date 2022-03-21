import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadAutoComponent } from './acad-auto.component';

describe('AcadAutoComponent', () => {
  let component: AcadAutoComponent;
  let fixture: ComponentFixture<AcadAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
