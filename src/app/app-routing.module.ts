import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AcadAUTOComponent } from './components/acad-auto/acad-auto.component';
import { AcadCIVILComponent } from './components/acad-civil/acad-civil.component';
import { AcadCSEComponent } from './components/acad-cse/acad-cse.component';
import { AcadECComponent } from './components/acad-ec/acad-ec.component';
import { AcademicsComponent } from './components/academics/academics.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GrievanceComponent } from './components/grievance/grievance.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'grievance',component:GrievanceComponent},
  {path:'about',component:AboutComponent},

  {path:'academics',component:AcademicsComponent,
  children:[
  {path:'acad-auto',component:AcadAUTOComponent},
  {path:'acad-civil',component:AcadCIVILComponent},
  {path:'acad-cse',component:AcadCSEComponent},
  {path:'acad-ec',component:AcadECComponent}

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
