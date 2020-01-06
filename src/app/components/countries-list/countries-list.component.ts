import { Component, OnInit } from '@angular/core';
import countries from "../../../countries.js"
@Component({
    selector: 'app-countries-list',
    templateUrl: './countries-list.component.html',
    styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

    public countries: Array<any>
    constructor() {
        this.countries = countries
    }
    isBorders(borders, index) {

        return borders && borders.length
    }
    ngOnInit() {
    }

}
