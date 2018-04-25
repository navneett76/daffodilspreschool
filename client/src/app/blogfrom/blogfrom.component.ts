import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogpostService } from '../blogpost.service';
import { PagerService } from '../_services/pager.service';

@Component({
  selector: 'app-blogfrom',
  templateUrl: './blogfrom.component.html',
  styleUrls: ['./blogfrom.component.css'],
  providers:[BlogpostService, PagerService]
})
export class BlogfromComponent implements OnInit {
	model: any = {};
	retmessage: any = {} ;
	
	// array of all items to be paged
    private posts: any[];

    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];

	constructor(private blogPost: BlogpostService, private pagerService: PagerService) { }

	ngOnInit() {
		this.blogPost.searchPosts()
			.subscribe(retList => {
                // set items to json response
                this.posts = retList;

                // initialize to page 1
                this.setPage(1);
            });
	}

	setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        console.log(this.posts.length);

        // get pager object from service
        this.pager = this.pagerService.getPager(this.posts.length, page);


        // get current page of items
        this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
        console.log(this.pagedItems);
    }

	postcreate(){
		this.blogPost.createPost(this.model)
			.subscribe(retData => {
				this.retmessage = retData;
				console.log(this.retmessage._body);
			}
		);
		//
  	}

  	// delete post 
  	deletePost(postId){
  		// console.log(postId);
  		this.blogPost.deletePost(postId)
  			.subscribe(data => {
  				this.retmessage = data;
  			});
  	}
}


