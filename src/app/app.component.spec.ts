import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
<<<<<<< HEAD
  it(`should have as title 'app-rad'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app-rad');
=======
  it(`should have as title 'app-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app-angular');
>>>>>>> 2b5b9e4fc289c5756d5603a1293d021ef79170a4
=======
  it(`should have as title 'popup-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('popup-project');
>>>>>>> 6344da3 (initial commit)
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
<<<<<<< HEAD
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, app-rad');
=======
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, app-angular');
>>>>>>> 2b5b9e4fc289c5756d5603a1293d021ef79170a4
=======
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, popup-project');
>>>>>>> 6344da3 (initial commit)
  });
});
