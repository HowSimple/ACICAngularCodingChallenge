import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineOfBusinessDetailComponent } from './lineOfBusiness-detail/lineOfBusiness-detail.component';
import { LineOfBusinessComponent } from './linesOfBusiness/linesOfBusiness.component';
import { LineOfBusinessSearchComponent } from './lineOfBusiness-search/lineOfBusiness-search.component';
import { MessagesComponent } from './messages/messages.component';
import { LinesOfBusinessMostPopularComponent } from './lines-of-business-most-popular/lines-of-business-most-popular.component';
import { LineOfBusinessRecentQuotesComponent } from './line-of-business-recent-quotes/line-of-business-recent-quotes.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LineOfBusinessDetailComponent,
    LineOfBusinessComponent,
    LineOfBusinessSearchComponent,
    MessagesComponent,
    LinesOfBusinessMostPopularComponent,
    LineOfBusinessRecentQuotesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
