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
import { FormsModule } from '@angular/forms';
import { BlogfromComponent } from './blogfrom/blogfrom.component';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactsComponent,
    AboutusComponent,
    ServicesComponent,
    BlogComponent,
    BlogfromComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule, routing, AlertModule.forRoot(), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
