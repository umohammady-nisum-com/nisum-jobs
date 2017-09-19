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
		firstName: null,
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

	isValid(){
		if(this.jobListing.firstName=="" || this.jobListing.lastName=="" || this.jobListing.email=="" ||this.jobListing.phone!=""
			|| this.jobListing.title=="" || this.jobListing.description==""|| this.jobListing.qualifications=="" 
			|| this.jobListing.company=="" || this.jobListing.salary==null || this.jobListing.jobType==""
			|| this.jobListing.apply=="" || this.jobListing.location=="")
		return false
	return true;
	}

	onSubmit(){
		if(this.isValid())
		{
			alert("Hello " + this.jobListing.firstName + "\nYour Job: " + this.jobListing.title + " has been posted.\nThank You!")
			this.appService.saveData(this.jobListing)
			this.router.navigate(['allListings'])
			location.reload()
		}
		else {
			alert ('Form Incomplete, Please fill out the whole form.')
		}
	}

}