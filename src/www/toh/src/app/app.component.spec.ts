import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
<<<<<<< HEAD
=======

>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
<<<<<<< HEAD
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'toh'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('toh');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to toh!');
  }));
=======
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
});
