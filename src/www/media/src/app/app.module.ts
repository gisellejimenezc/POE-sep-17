<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { BookSearchComponent } from './book-search/book-search.component';
import { MessagesComponent }    from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    MessagesComponent,
    DashboardComponent,
    BookSearchComponent
  ],
=======
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BookDetailComponent }  from './book-detail/book-detail.component';
import { BooksComponent }      from './books/books.component';
import { BookSearchComponent }  from './book-search/book-search.component';
import { MessagesComponent }    from './messages/messages.component';

@NgModule({
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientInMemoryWebApiModule,
=======
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
<<<<<<< HEAD

  bootstrap: [AppComponent]
=======
  declarations: [
    AppComponent,
    DashboardComponent,
    BooksComponent,
    BookDetailComponent,
    MessagesComponent,
    BookSearchComponent
  ],
  bootstrap: [ AppComponent ]
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
})
export class AppModule { }
