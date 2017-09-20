import  { Component, OnInit, Input } from '@angular/core'

import { AppService } from '../../services/app.service';
import { JobListing } from '../Models/model';

import { RouterLink } from '@angular/router'

import { FilterPipe } from '../filter/filter.pipe'

@Component ({
	templateUrl: 'all-listings.component.html',
	styleUrls: ['all-listings.component.css']

})

export class AllListings {

	@Input() jobListings: JobListing[] = [];


	constructor(private appService: AppService) {}

	ngOnInit() {this.getAllListings()}

	getAllListings(){
		this.appService.getAllData()
		.subscribe(
			(info) => { this.jobListings = info; console.log(this.jobListings); },
			error => console.log(error)
			);
	}

	

}

