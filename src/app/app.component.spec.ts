import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import {FormControl, FormGroup, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { GenderPipe } from './gender.pipe';
import { PersonService } from './person.service';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GenderPipe
      ],
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ],
      providers: [
        PersonService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Hello Angular!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Hello Angular!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hello Angular!');
  }));

  it('should render name in a h4 tag', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Chris');
    // by name
    expect(compiled.querySelector('#name').textContent).toContain('Chris');
    // by class
    expect(compiled.querySelector('.myname').textContent).toContain('Chris');

    tick(); // simulate after init
    expect(compiled.querySelector('#inputName').value).toContain('Chris');
  }));
});
