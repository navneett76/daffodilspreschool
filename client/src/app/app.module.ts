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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserComponent } from './user/user.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

// import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

// import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactsComponent,
    AboutusComponent,
    ServicesComponent,
    BlogComponent,
    BlogfromComponent,
    UserComponent,
    GalleryComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule, routing, AlertModule.forRoot(), FormsModule, Ng2SearchPipeModule 
    , BrowserAnimationsModule, NoopAnimationsModule , MatButtonModule, MatCheckboxModule, MatListModule
    
    // , MatButtonModule, MatCheckboxModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
