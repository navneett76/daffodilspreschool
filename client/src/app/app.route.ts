import { ModuleWithProviders } from "@angular/core";
import { PageNotFoundComponent } from './other/PageNotFound.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { BlogfromComponent } from './blogfrom/blogfrom.component';
import { UserComponent } from './user/user.component';
import { GalleryComponent } from './gallery/gallery.component';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: '', redirectTo: "/home", pathMatch: 'full' },
	{ path: 'aboutus', component: AboutusComponent },
	{ path: 'services', component: ServicesComponent },
	{ path: 'blog', component: BlogComponent },
	{ path: 'blogform', component: BlogfromComponent },
	{ path: 'users', component: UserComponent },
	{ path: 'contact', component: ContactsComponent },
	{ path: 'gallery', component: GalleryComponent },
	{ path: '**', component: PageNotFoundComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

