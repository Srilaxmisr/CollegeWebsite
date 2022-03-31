import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GrievanceComponent } from './components/grievance/grievance.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import { ApplyComponent } from './apply/apply.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GrievanceComponent,
    GalleryComponent,
    AboutComponent,
    ApplyComponent
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
