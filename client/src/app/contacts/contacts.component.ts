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

	constructor( private ContactService: ContactService ) { } // private ContactService: ContactService

  	ngOnInit() {
  		this.ContactService.getContacts()
  			.subscribe( contacts => this.contacts = contacts );
  	
  		// console.log(this.contacts);

  	}

}
