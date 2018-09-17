import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======

>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
<<<<<<< HEAD
  styleUrls: ['./hero-search.component.css']
=======
  styleUrls: [ './hero-search.component.css' ]
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

<<<<<<< HEAD
 constructor(private heroService: HeroService) {}

  search(term: string): void {
     this.searchTerms.next(term);
   }

  ngOnInit(): void {
  this.heroes$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // switch to new search observable each time the term changes
        switchMap((term: string) => this.heroService.searchHeroes(term)),
      );
  }

=======
  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
}
