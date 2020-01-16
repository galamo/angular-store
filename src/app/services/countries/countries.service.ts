import { Injectable } from '@angular/core';
import countriesData from "../../../countries.js"
@Injectable({
    providedIn: 'root'
})
export class CountriesService {
    private countries: Array<any>
    constructor() {
        this.countries = countriesData.map(c => ({ ...c, fav: false, isSelected: false }))
    }

    getCountries() { return this.countries }
    addToFavorites(country) {
        country.fav = true;
    }
    getFavorites() {
        console.log(this.countries.filter(c => c.fav))
        return this.countries.filter(c => c.fav)
    }
}
