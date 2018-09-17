import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
<<<<<<< HEAD
=======
import { HeroSearchComponent } from '../hero-search/hero-search.component';

import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
<<<<<<< HEAD

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
=======
  let heroService;
  let getHeroesSpy;

  beforeEach(async(() => {
    heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
    getHeroesSpy = heroService.getHeroes.and.returnValue( of(HEROES) );
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        HeroSearchComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: HeroService, useValue: heroService }
      ]
    })
    .compileComponents();

>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

<<<<<<< HEAD
  it('should create', () => {
    expect(component).toBeTruthy();
  });
=======
  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Heroes" as headline', () => {
    expect(fixture.nativeElement.querySelector('h3').textContent).toEqual('Top Heroes');
  });

  it('should call heroService', async(() => {
    expect(getHeroesSpy.calls.any()).toBe(true);
    }));

  it('should display 4 links', async(() => {
    expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
  }));

>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
});
