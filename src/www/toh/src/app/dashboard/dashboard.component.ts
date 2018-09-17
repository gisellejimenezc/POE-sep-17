import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
<<<<<<< HEAD
  styleUrls: ['./dashboard.component.css']
=======
  styleUrls: [ './dashboard.component.css' ]
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
<<<<<<< HEAD
  this.getHeroes();
  }

  getHeroes(): void {
      this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }

=======
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
}
