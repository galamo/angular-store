import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
    @Input('my-country') country
    @Output('del') del = new EventEmitter<any>()
    public posts: Array<string>
    public post: string;
    public str: string;
    public hoverme: number
    constructor() {
        this.posts = []
        this.hoverme = 50;
    }
    big() { this.hoverme = 100 }
    init() { this.hoverme = 50; }
    delme() { this.del.emit(this.country.name) }
    ngOnInit() {
    }

    addPost() {
        this.posts.push(this.post)
    }




}
