import { Injectable } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()

export class BlogpostService {

  constructor(private _http: Http  ) { }

  	createPost(postData){
  		return this._http.post('http://localhost:3000/api/createpost', {title: postData.ptitle, description: postData.pdiscription})
  			.map(resPosponse => resPosponse.json);
  	}

}
