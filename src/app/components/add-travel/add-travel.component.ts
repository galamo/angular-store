import { Component, OnInit } from '@angular/core';
import { FavoritesService } from "../../services/favorites.service"

@Component({
    selector: 'app-add-travel',
    templateUrl: './add-travel.component.html',
    styleUrls: ['./add-travel.component.css']
    // providers: [FavoritesService]
})
export class AddTravelComponent implements OnInit {

    constructor(public favoriteService: FavoritesService) { }

    ngOnInit() {
        this.favoriteService.setCountry("USA")
    }

}
