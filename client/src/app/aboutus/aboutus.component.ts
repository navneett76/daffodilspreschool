import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import { ChildComponent } from "./aboutuschild.component";

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  providers:[]
})
export class AboutusComponent implements OnInit, AfterViewInit  {

	// @ViewChild(ChildComponent) child;
	// parentMessage = "message from parent"
	book: any[] = [{
		bookReviews:15
	}]

 	constructor() { }

 	message:string;

	ngOnInit() {

	}

	ngAfterViewInit(){
		// console.log("Hello friends: "+JSON.stringify(this.child));
		// this.message = this.child.message
	}

}
