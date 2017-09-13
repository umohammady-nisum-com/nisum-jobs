import { Component, OnInit, Input } from '@angular/core'

import { JobListing } from '../Models/model';
import { AppService } from '../../services/app.service';
import { ActivatedRoute  } from '@angular/router';




@Component ({

	moduleId: module.id,
	templateUrl: 'listing.component.html',
	styleUrls: ['./listing.component.css']
})


export class Listing implements OnInit {

	@Input() jobListing: JobListing;

	constructor(private appService: AppService,
				private route: ActivatedRoute) {}

	ngOnInit(): void{this.getJobInfo()}

	getJobInfo() {

		this.appService.getData(this.route.snapshot.params['id']).subscribe(
			(info: JobListing) => { this.jobListing = info; console.log(this.jobListing); },
			error => console.log(error)
			);

	}

}