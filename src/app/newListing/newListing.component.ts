import { Component, OnInit } from '@angular/core'
import { Router }	from '@angular/router'

import { JobListing } from '../Models/model' 

import { AppService } from '../../services/app.service'


@Component ({
	templateUrl: 'newListing.component.html',
	styleUrls: ['./newListing.component.css']
})


export class NewListing implements OnInit {

	jobListing: JobListing 
	displayDate = new Date().toLocaleDateString();
	constructor(private router: Router,
				private appService: AppService){}
	ngOnInit(){

	this.jobListing = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		title: '',
		description: '',
		qualifications: '',
		company: '',
		salary: null,
		jobType: '',
		apply: '',
		dates: this.displayDate,
		location: ''
		}
	}


	cancel(){
		this.router.navigate(['allListings'])
	}

	onSubmit(){
		this.appService.saveData(this.jobListing)
		this.router.navigate(['allListings'])
	}

}