import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
<<<<<<< HEAD
import { Book } from '../book';
import { BookService }  from '../book.service';

@Component({
selector: 'app-book-detail',
templateUrl: './book-detail.component.html',
styleUrls: ['./book-detail.component.css']
=======

import { Book }         from '../book';
import { BookService }  from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: [ './book-detail.component.css' ]
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book;

<<<<<<< HEAD
constructor(private route: ActivatedRoute,
                private bookService: BookService,
                private location: Location)
                 { }

ngOnInit(): void{
 this.getBook();
}

getBook(): void {
=======
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id)
      .subscribe(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }

<<<<<<< HEAD
  
 save(): void {
  this.bookService.updateBook(this.book)
    .subscribe(() => this.goBack());
}
=======
 save(): void {
    this.bookService.updateBook(this.book)
      .subscribe(() => this.goBack());
  }
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
}
