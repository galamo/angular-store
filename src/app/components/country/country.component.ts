import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
    @Input('my-country') country
    @Output('del') del = new EventEmitter()
    public hoverme: number
    constructor() {
        this.hoverme = 50;
    }
    big() { this.hoverme = 100 }
    init() { this.hoverme = 50; }
    // delme() { this.del.emit() }
    ngOnInit() {
    }



}
