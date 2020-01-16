import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const INITIAL_WIDTH = 50

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.css'],

})
export class CountryComponent implements OnInit {
    @Input() countryObj: any
    @Output() delEvent = new EventEmitter<any>()
    public flagWidth: number
    public comment: string;
    public comments: Array<string>
    constructor() {
        this.flagWidth = INITIAL_WIDTH
        this.comments = [];
    }

    ngOnInit() {
    }

    delete() {
        this.delEvent.emit(this.countryObj.name)
    }

    changeFlagSize(width: number) {
        this.flagWidth = width
    }
    addComment() {
        this.comments.push(this.comment)
        this.comment = "";
    }

    selectCountry() {
        this.countryObj.isSelected = !this.countryObj.isSelected
    }

}
