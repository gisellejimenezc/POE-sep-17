import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { HeroSearchComponent } from './hero-search.component';

=======
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroSearchComponent } from './hero-search.component';


>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ HeroSearchComponent ]
=======
      declarations: [ HeroSearchComponent ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule]
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
