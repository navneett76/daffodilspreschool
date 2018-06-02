import { Injectable } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()

export class BlogpostService {

	userRes: string;

  	constructor(private _http: Http  ) { }
		createPost(postData){
  		// console.log(postData); //return false;
  		if("userId" in postData){
  			// console.log("OOOOOOOOOOOOOOOO"); return false;
  			return this._http.post('http://localhost:3000/api/updatePost', {title: postData.title, description: postData.pdiscription, uId: postData.userId})
  			.map(res => res.json());

  		}else{
  			// insert the record/
  			return this._http.post('http://localhost:3000/api/createpost', {title: postData.title, description: postData.pdiscription})
  			.map(res => res.json());
  		}
  	}

	editPost(postId){
  		return this._http.get('http://localhost:3000/api/editPost/'+postId)
  			.map(res => res.json());
	}

  	deletePost(postId){
  		return this._http.delete("http://localhost:3000/api/deletePost/"+postId)
  			.map(res => res.json());
  			
  	}

  	searchPosts(){
  		return this._http.get("http://localhost:3000/api/listpost")
  			.map(res => res.json());
  	}

  	// upload image using the node js application while sending the data from the angular js
  	uplaodImage(selectedFile){
  		const fd = new FormData();
  		fd.append('image', selectedFile, selectedFile.name);
  		return this._http.post("http://localhost:3000/api/uploadImageFile/", fd)
  			.map(res =>  res.json());
  		
  	}

}
