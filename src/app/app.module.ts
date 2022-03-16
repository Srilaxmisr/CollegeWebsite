import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AcademicsComponent } from './components/academics/academics.component';
import { GrievanceComponent } from './components/grievance/grievance.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { AcadCSEComponent } from './components/acad-cse/acad-cse.component';
import { AcadCIVILComponent } from './components/acad-civil/acad-civil.component';
import { AcadECComponent } from './components/acad-ec/acad-ec.component';
import { AcadAUTOComponent } from './components/acad-auto/acad-auto.component';
import { GrievAUTOComponent } from './components/griev-auto/griev-auto.component';
import { GrievCIVILComponent } from './components/griev-civil/griev-civil.component';
import { GrievECComponent } from './components/griev-ec/griev-ec.component';
import { GrievCSEComponent } from './components/griev-cse/griev-cse.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule}from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcademicsComponent,
    GrievanceComponent,
    GalleryComponent,
    AboutComponent,
    AcadCSEComponent,
    AcadCIVILComponent,
    AcadECComponent,
    AcadAUTOComponent,
    GrievAUTOComponent,
    GrievCIVILComponent,
    GrievECComponent,
    GrievCSEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
