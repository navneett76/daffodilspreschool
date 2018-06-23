import { Injectable } from '@angular/core';
import { HttpModule, Http, Headers} from '@angular/http';

import { Contact } from './contact';
import 'rxjs/add/operator/map';
import * as CryptoJS from 'crypto-js';

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


	userData = [
	    {
	    	// username: 623543, 
	    	// password: 'W43AAG34'
	    	// username: 'rajesh', 
	    	// password: 'dev@123',
	    	name: 'navneet', 
	    	password: 'nav@123',
	    	email: 'navneet@example.com'
	    }
	];

//http://localhost:5000/api/login

// user get data from sql server using user credential.
	// userAuthenticate(){
	// 	return this.http.post("http://localhost:5000/api/login", this.userData, {
 //        })
 //       .map(res =>  res.json());
	// }

	// user register and get the token from the jwt to angular user.
	// userAuthenticate(){
	// 	return this.http.post("http://localhost:3600/api/auth/login", this.userData, {
 //        })
 //       .map(res =>  res.json());
	// }

	headers: any;
	token:string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjViMWZmMDYzZDkwNzMwMDU3YzQ4NTljOCIsImlhdCI6MTUyOTczODY4NCwiZXhwIjoxNTI5ODI1MDg0fQ.i6SgdqQxKz05Do7OZmpSoAcbSPdsWYamQFyRDlTlO6Y"; 
	// key = CryptoJS.enc.Utf8.parse('7061737323313233');
 	// iv = CryptoJS.enc.Utf8.parse('7061737323313233');
	// user can authenticate using the token value.
	userAuthenticate(){
		return this.http.post("http://localhost:3600/api/auth/login", 
				{ 
					headers: {'x-access-token': this.token}, 
					userData: this.userData
				}, {
        })
       .map(res =>  res.json());
	}



	// userAuthenticate(){
	// 	return this.http.post("http://localhost:3600/api/auth/signin", { headers: {'x-access-token': this.token} }, {
 //        })
 //       .map(res =>  res.json());
	// }

}

