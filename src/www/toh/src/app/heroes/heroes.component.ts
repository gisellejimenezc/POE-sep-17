import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Hero } from '../hero';

=======

import { Hero } from '../hero';
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
<<<<<<< HEAD

=======
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
<<<<<<< HEAD
  this.getHeroes();
=======
    this.getHeroes();
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
  }

  getHeroes(): void {
    this.heroService.getHeroes()
<<<<<<< HEAD
          .subscribe(heroes => this.heroes = heroes);
=======
    .subscribe(heroes => this.heroes = heroes);
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
<<<<<<< HEAD
 }
=======

}
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
