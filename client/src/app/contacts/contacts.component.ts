import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrls: ['./contacts.component.css'],
	providers: [ContactService]  
})
export class ContactsComponent implements OnInit {

	contacts:any;
	users: any;

	constructor( private ContactService: ContactService ) { } // private ContactService: ContactService

  	ngOnInit() {
  		this.ContactService.getContacts()
  			.subscribe( contacts => this.contacts = contacts );
  	
  		// this.ContactService.userAuthenticate()
  		// 	.subscribe( user => function(){
  		// 		// this.users = user
  		// 		console.log("user");
  		// 	});
  		this.ContactService.userAuthenticate().subscribe(
           data => console.log(this.users = data),
           err => console.log(err),
           () => console.log('Request Completed')
        );

  	}

}
