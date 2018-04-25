import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogpostService } from '../blogpost.service';
import { PagerService } from '../_services/pager.service';

@Component({
  selector: 'app-blogfrom',
  templateUrl: './blogfrom.component.html',
  styleUrls: ['./blogfrom.component.css'],
  providers:[BlogpostService, PagerService]
})
export class BlogfromComponent implements OnInit, OnDestroy {
	model: any = {};
	userEditData: any = {};
	retmessage: string='' ;
	
	postData: any = {};
	// array of all items to be paged
    private posts: any[];

    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];

    // get the latest page no after delete
    pageNum: number;

	constructor(private blogPost: BlogpostService, private pagerService: PagerService) { }

	ngOnInit() {
		this.getPostData();
	}

	getPostData(pageNo = 1){
		this.blogPost.searchPosts()
			.subscribe(retList => {
                // set items to json response
                this.posts = retList;

                // initialize to page 1
                this.setPage(pageNo);
            });
	}

	setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.posts.length, page);


        // get current page of items
        this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // console.log(this.pagedItems);
    }

	postcreate(){

		this.blogPost.createPost(this.model)
			.subscribe(retData => {
				this.retmessage = retData;
				this.getPostData(1);
				this.model.title 		= '';
                this.model.pdiscription = '';
                this.model.userId 		= '';
                // this.model.title.focus();
			}

		);
  	}


	postEdit(postId){
		this.blogPost.editPost(postId)
			.subscribe(retList => {
                // set items to json response
                this.userEditData 		= retList;
                this.model.title 		= this.userEditData[0].title;
                this.model.pdiscription = this.userEditData[0].description;
                this.model.userId 		= this.userEditData[0]._id;

            }
		);
  	}

  	// delete post 
  	deletePost(postId){
  		// console.log(postId);
  		this.blogPost.deletePost(postId)
  			.subscribe(data => {
  				//console.log(data);
  				this.retmessage = data;

  				this.pageNum	= this.pager.currentPage;
		  		if(((this.pager.totalItems-1)/(this.pager.pageSize))==(this.pager.currentPage-1)) {
		  			this.pageNum	= (this.pager.currentPage-1);
		  		}
		  		// console.log(((this.pager.totalItems-1)/(this.pager.pageSize)));
		  		this.getPostData(this.pageNum);

  			});
  		
  	}

  	ngOnDestroy() {
  		// this.model.unsubscribe();
  	}
}


