import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



const INITIAL_WIDTH = 50

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
    @Input() countryObj: any
    @Output() delEvent = new EventEmitter<any>()
    public flagWidth: number
    constructor() { this.flagWidth = INITIAL_WIDTH }

    ngOnInit() {
    }

    delete() {
        this.delEvent.emit(this.countryObj.name)
    }

    changeFlagSize(width: number) {
        this.flagWidth = width
    }

    selectCountry() {
        this.countryObj.isSelected = !this.countryObj.isSelected
    }

}
