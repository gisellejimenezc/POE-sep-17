import { Component, OnInit } from '@angular/core';

import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
<<<<<<< HEAD

=======
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
<<<<<<< HEAD
        .subscribe(books => this.books = books);
=======
    .subscribe(books => this.books = books);
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
<<<<<<< HEAD
    this.bookService.addBook({ title } as Book)
=======
    const newBook: Book = new Book();
    newBook.title = title;
    this.bookService.addBook(newBook)
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
      .subscribe(book => {
        this.books.push(book);
      });
  }
<<<<<<< HEAD
 
  delete(book: Book): void {
    this.books = this.books.filter(b => b !== book);
=======

  delete(book: Book): void {
    this.books = this.books.filter(h => h !== book);
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
    this.bookService.deleteBook(book).subscribe();
  }

}
