import { Injectable } from '@angular/core';
import { HttpModule, Http} from '@angular/http';
import { Contact } from './contact';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService{

	constructor( private http: Http){}

	// retriving contact service
	getContacts(){
		// return 'This is contact service page return value.';
		return this.http.get("http://localhost:3000/api/contacts")
				.map(res => res.json());
	}

	// add contact method.
	addContact(newContact){
		//var  headers  = new Headers();
		// this.headers.append("content-type", "application/json");
		// return this.http.post("http://localhost:3000/api/contact", newContact, {headers:this.headers})
		// 		.map ( res => res.json());
	}

	// delete contacts 
	deleteContact(id){
		return this.http.delete("http://localhost:3000/api/contact"+id)
				.map( res => res.json());
	}
}

