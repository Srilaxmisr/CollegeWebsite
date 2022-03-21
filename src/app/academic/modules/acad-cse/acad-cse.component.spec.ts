import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadCseComponent } from './acad-cse.component';

describe('AcadCseComponent', () => {
  let component: AcadCseComponent;
  let fixture: ComponentFixture<AcadCseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadCseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadCseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
