import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadCSEComponent } from './acad-cse.component';

describe('AcadCSEComponent', () => {
  let component: AcadCSEComponent;
  let fixture: ComponentFixture<AcadCSEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadCSEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadCSEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
