import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeader } from './components/header/header.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';

@NgModule({
    declarations: [
        AppComponent,
        AppHeader,
        UsersListComponent,
        CountriesListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
