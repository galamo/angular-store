import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { AppHeader } from './components/header/header.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountryComponent } from './components/country/country.component';
import { FormsModule } from "@angular/forms";
import { TravelsComponent } from './components/travels/travels.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbar } from "@angular/material";
import { AddTravelComponent } from './components/add-travel/add-travel.component';
import { TravelListComponent } from './components/travel-list/travel-list.component';
import { RoutesLinksComponent } from './components/routes-links/routes-links.component'

@NgModule({
    declarations: [
        AppComponent,
        AppHeader,
        UsersListComponent,
        CountriesListComponent,
        CountryComponent,
        TravelsComponent,
        NavbarComponent,
        MatToolbar,
        AddTravelComponent,
        TravelListComponent,
        RoutesLinksComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
