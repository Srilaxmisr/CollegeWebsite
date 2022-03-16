import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadAUTOComponent } from './acad-auto.component';

describe('AcadAUTOComponent', () => {
  let component: AcadAUTOComponent;
  let fixture: ComponentFixture<AcadAUTOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadAUTOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadAUTOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
