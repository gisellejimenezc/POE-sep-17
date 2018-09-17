import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { BooksComponent }      from './books/books.component';
import { BookDetailComponent }  from './book-detail/book-detail.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
=======
  { path: '', redirectTo: '/books', pathMatch: 'full' },
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: BookDetailComponent },
  { path: 'books', component: BooksComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
