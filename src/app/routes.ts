import { Routes } from '@angular/router'
import { Listing } from '../app/listing/listing.component'
import { AllListings } from '../app/allListings/all-listings.component'
import { NewListing } from '../app/newListing/newListing.component'
import { Error404Component } from '../app/errors/404.component'
import { DataRouteActivator } from '../services/route-activator.service'

export const appRoutes:Routes = [

	{ path: 'allListings', component: AllListings, canActivate: [DataRouteActivator] },
	{ path: 'listing/:id', component: Listing, canActivate: [DataRouteActivator] },
	{ path: 'newListing', component: NewListing },
	{ path: '404', component: Error404Component},
	{ path: '', redirectTo: '/allListings', pathMatch: 'full'}
]