import { Routes, Route } from '@angular/router';
import { CountriesListComponent } from '../components/countries-list/countries-list.component';
import { TravelsComponent } from '../components/travels/travels.component';
import { AddTravelComponent } from '../components/add-travel/add-travel.component';
import { TravelListComponent } from '../components/travel-list/travel-list.component';


interface CustomRoute extends Route {
    children?: Array<CustomRoute>;
    title?: string;
    isVisible?: boolean;
}




export const routes: Array<CustomRoute> = [
    { path: "", redirectTo: "countries", pathMatch: "full" },
    { path: "countries", component: CountriesListComponent, title: "CountrieS", isVisible: true },
    {
        path: "travels", component: TravelsComponent, title: "Trips", isVisible: true, children: [
            { path: "", redirectTo: "travel-list", pathMatch: "full" },
            {
                path: "travel-list", component: TravelListComponent, isVisible: true, title: "List"
            },
            {
                path: "add-travel", component: AddTravelComponent, isVisible: true, title: "Add"
            }
        ]
    }
];