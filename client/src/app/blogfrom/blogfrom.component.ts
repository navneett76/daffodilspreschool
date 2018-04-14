import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blogfrom',
  templateUrl: './blogfrom.component.html',
  styleUrls: ['./blogfrom.component.css'],
  providers:[BlogpostService]
})
export class BlogfromComponent implements OnInit {
	model: any = {};
	retmessage: any = {};

	constructor(private blogPost: BlogpostService) { }

	ngOnInit() {
	}

	postcreate(){
		this.blogPost.createPost(this.model)
			.subscribe(retData => this.retmessage = retData);

	}

}
