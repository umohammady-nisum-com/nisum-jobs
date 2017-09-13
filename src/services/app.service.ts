import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions} from "@angular/http"

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { JobListing } from '../app/Models/model'




@Injectable() 
export class AppService {

	url: string;

	constructor(private http: Http) {
		this.url = "http://localhost:3000/"
	}


	getAllData(): Observable<JobListing[]> {
		return this.http
			.get(this.url + 'api/listings')
            .map((response: Response) => <JobListing[]>response.json());
	}

	getData(id: string): Observable<JobListing> {

		return this.http 
		.get(this.url + 'api/listings/' + id)
        .map((response: Response) => <JobListing>response.json());

	}


	saveData( jobListing: JobListing){
		let headers = new Headers({'Content-Type': 'application/json'})
		let options = new RequestOptions({headers: headers})
		this.http.post(this.url + 'api/listings/', 
			JSON.stringify(jobListing),
			options).subscribe(
            	data => console.log('Data call response ' + data),
         		error => console.log('Data call error ' + error)
            )
	}

}