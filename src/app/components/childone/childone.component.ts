import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.scss']
})
export class ChildoneComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input()
  lesson: string = '';

  @ContentChild('paragraphOne') paragraphOne: ElementRef = {nativeElement: undefined};

  constructor() {
    console.log('logging constructor')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('logging ngOnChanges: ', changes)
  }

  ngOnInit(): void {
    console.log('logging ngOnInit')
  }

  ngDoCheck(): void {
    console.log('logging ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('logging ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    this.paragraphOne.nativeElement.style.color = 'purple';
    console.log('logging ngAfterContentChecked')
  }

  ngAfterViewChecked(): void {
    console.log('logging ngAfterViewChecked')
  }

  ngAfterViewInit(): void {
    console.log('logging ngAfterViewInit')
  }

  ngOnDestroy(): void {
    console.log('logging ngOnDestroy')
  }
}
