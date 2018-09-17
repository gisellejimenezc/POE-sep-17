import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { HeroesComponent } from './heroes.component';
=======
import { RouterTestingModule } from '@angular/router/testing';
import { HeroesComponent } from './heroes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ HeroesComponent ]
=======
      declarations: [ HeroesComponent ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

<<<<<<< HEAD
  it('should create', () => {
=======
  it('should be created', () => {
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
    expect(component).toBeTruthy();
  });
});
