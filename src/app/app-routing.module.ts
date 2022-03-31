import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GrievanceComponent } from './components/grievance/grievance.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'grievance',component:GrievanceComponent},
  {path:'about',component:AboutComponent},
  {path:'apply', component:ApplyComponent},

 // {path:'academics',component:AcademicsComponent},
  { path: 'academic', loadChildren: () => import('./academic/academic.module').then(m => m.AcademicModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
