import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';


@NgModule({
  declarations: [ // Here we write down the name of all the components which are going to have in the application
    AppComponent, PropertyCardComponent, PropertyListComponent,NavBarComponent
  ],
  imports: [
    BrowserModule //Here we write all the imported modules
  ],
  providers: [ // Here we register the injectables services
],
  bootstrap: [AppComponent //This will have the name of main component
]
})
export class AppModule { }
