import { Component, OnInit } from '@angular/core';
import countriesData from "../../../countries.js"
@Component({
    selector: 'app-countries-list',
    templateUrl: './countries-list.component.html',
    styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent {
    public countries: Array<any>
    public selectedCountry: number;
    public selectedColor: string;
    public size: string;
    constructor() {
        this.countries = countriesData.map(c => { return { ...c, isSelected: false } })
        this.selectedCountry = -1;
        this.selectedColor = "red"
        this.size = "40px"
    }

    moreThenTwoCurrencies(country: any) {
        return country.currencies && country.currencies.length > 1
    }
    deleteMe(index: number) {
        //use alpha3code
        this.countries.splice(index, 1)
        this.selectedCountry = -1;
    }
    selectCountry(country: any) {
        country.isSelected = !country.isSelected
    }

}
