import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDataComponent } from './list-data/list-data.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { FormsModule } from '@angular/forms';
import { CartListComponent } from './cart-list/cart-list.component';
import {IntermediateService} from './intermediate.service';
import { LandingComponent } from './landing/landing.component';
import { CartResolverService } from './cart-resolver.service';
import { LayoutModule } from './layout/layout.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ListDataComponent,
    SearchFilterComponent,
    CartListComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    HttpModule
  ],
  providers: [
    IntermediateService,
    CartResolverService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
