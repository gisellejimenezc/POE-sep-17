import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Book } from './book';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class BookService {

  private booksUrl = 'api/books';  // URL to web api

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

    getBooks (): Observable<Book[]> {
      return this.http.get<Book[]>(this.booksUrl)
        .pipe(
          tap(books => this.log('fetched books')),
          catchError(this.handleError('getBooks', []))
        );
    }

    getHeroNo404<Data>(id: number): Observable<Book> {
      const url = `${this.booksUrl}/?id=${id}`;
      return this.http.get<Book[]>(url)
        .pipe(
          map(books => books[0]), // returns a {0|1} element array
          tap(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} book id=${id}`);
          }),
          catchError(this.handleError<Book>(`getBook id=${id}`))
        );
    }

    getBook(id: number): Observable<Book> {
      const url = `${this.booksUrl}/${id}`;
      return this.http.get<Book>(url).pipe(
        tap(_ => this.log(`fetched book id=${id}`)),
        catchError(this.handleError<Book>(`getBook id=${id}`))
      );
    }

    searchBooks(term: string): Observable<Book[]> {
      if (!term.trim()) {
        // if not search term, return empty hero array.
        return of([]);
      }
      return this.http.get<Book[]>(`${this.booksUrl}/?name=${term}`).pipe(
        tap(_ => this.log(`found books matching "${term}"`)),
        catchError(this.handleError<Book[]>('searchBooks', []))
      );
    }

    addBook (book: Book): Observable<Book> {
      return this.http.post<Book>(this.booksUrl, book, httpOptions).pipe(
        tap((hero: Book) => this.log(`added book w/ id=${book.id}`)),
        catchError(this.handleError<Book>('addBook'))
      );
    }

    deleteBook (book: Book | number): Observable<Book> {
      const id = typeof book === 'number' ? book : book.id;
      const url = `${this.booksUrl}/${id}`;
  
      return this.http.delete<Book>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted book id=${id}`)),
        catchError(this.handleError<Book>('deleteBook'))
      );
    }

    updateBook (book: Book): Observable<any> {
      return this.http.put(this.booksUrl, book, httpOptions).pipe(
        tap(_ => this.log(`updated book id=${book.id}`)),
        catchError(this.handleError<any>('updateBook'))
      );
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
