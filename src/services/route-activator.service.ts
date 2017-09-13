import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { AppService } from './app.service'

@Injectable() 
export class DataRouteActivator implements CanActivate {

	constructor(private appService: AppService,
				private router: Router){}

	canActivate(route:ActivatedRouteSnapshot){
		const dataExists = !!this.appService.getData(route.params['id'])

		if (!dataExists){
			this.router.navigate['404']
		}

		return dataExists
	}
}

