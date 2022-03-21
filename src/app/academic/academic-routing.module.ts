import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicComponent } from './academic.component';
import { AcadAutoComponent } from './modules/acad-auto/acad-auto.component';
import { AcadCivilComponent } from './modules/acad-civil/acad-civil.component';
import { AcadCseComponent } from './modules/acad-cse/acad-cse.component';
import { AcadEcComponent } from './modules/acad-ec/acad-ec.component';

const routes: Routes = [
  { path: '', component: AcademicComponent,
  children:[
    {path:'acad-auto',component:AcadAutoComponent},
    {path:'acad-civil',component:AcadCivilComponent},
    {path:'acad-cse',component:AcadCseComponent },
    {path:'acad-ec',component:AcadEcComponent}
    ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicRoutingModule { }
