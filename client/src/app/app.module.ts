import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './other/PageNotFound.component';

import {routing} from "./app.route";
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactsComponent,
    AboutusComponent,
    ServicesComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule, routing, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
