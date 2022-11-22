import {Component, ContentChild, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'lifecycle-hooks';
  lesson: string = '';
  hide: boolean = true;

  @ViewChild('button') button: ElementRef = {nativeElement: undefined}

  submit(value: HTMLInputElement) {
    this.lesson = value.value
    this.button.nativeElement.style.backgroundColor = 'red';
  }
}
