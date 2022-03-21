import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicRoutingModule } from './academic-routing.module';
import { AcademicComponent } from './academic.component';
import { AcadAutoComponent } from './modules/acad-auto/acad-auto.component';
import { AcadCivilComponent } from './modules/acad-civil/acad-civil.component';
import { AcadCseComponent } from './modules/acad-cse/acad-cse.component';
import { AcadEcComponent } from './modules/acad-ec/acad-ec.component';


@NgModule({
  declarations: [
    AcademicComponent,
    AcadAutoComponent,
    AcadCivilComponent,
    AcadCseComponent,
    AcadEcComponent
  ],
  imports: [
    CommonModule,
    AcademicRoutingModule
  ]
})
export class AcademicModule { }
