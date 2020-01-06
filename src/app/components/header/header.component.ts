import { Component } from "@angular/core"

const users = ["silvia", "adir", "sivan"];
@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class AppHeader {
    public title: string;
    public clicks: number
    constructor() {
        this.title = "Store App";
        this.clicks = 10
    }

    changeHeader = (newHeader: string) => {
        this.title = newHeader
    }
}