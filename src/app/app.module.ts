import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GrievanceComponent } from './components/grievance/grievance.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import { ApplyComponent } from './apply/apply.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminviewComponent } from './components/adminview/adminview.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GrievanceComponent,
    GalleryComponent,
    AboutComponent,
    ApplyComponent,
    AdminComponent,
    AdminviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
