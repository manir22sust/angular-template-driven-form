import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-reactive-forms';

  constructor() {}

  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  getValue(f: FormControl) {
    console.log(f);
  }
}
