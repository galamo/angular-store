import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { TravelsComponent } from './components/travels/travels.component';
import { AddTravelComponent } from './components/add-travel/add-travel.component';
import { TravelListComponent } from './components/travel-list/travel-list.component';


const routes: Routes = [
    { path: "", redirectTo: "countries", pathMatch: "full" },
    { path: "countries", component: CountriesListComponent },
    {
        path: "travels", component: TravelsComponent, children: [
            { path: "", redirectTo: "travel-list", pathMatch: "full" },
            {
                path: "travel-list", component: TravelListComponent
            },
            {
                path: "add-travel", component: AddTravelComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
