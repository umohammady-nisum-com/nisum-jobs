import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(listings: any, term: any): any {

  	// Check if term is undefined 
  	if (term === undefined ) return listings;

  	// return updated array 
  	return listings.filter(function(listing){
  		return listing.title.toLowerCase().includes(term.toLowerCase());  
  	})
  }

}
