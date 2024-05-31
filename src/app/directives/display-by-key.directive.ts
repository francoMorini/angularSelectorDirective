import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[displayWithKey]',
  standalone: true
})
export class DisplayByKeyDirective implements OnInit{
  private _elRef = inject(ElementRef);
  
  @Input() displayWithKey!: string;

  @HostListener('document:keypress', ['$event']) onKeyPress(event: KeyboardEvent): void {
    if(event.key !== this.displayWithKey){
      return;
    }
    this._elRef.nativeElement.style.display = (this._elRef.nativeElement.style.display === 'none') ? 'block' : 'none';
  }

  ngOnInit(): void {
    this._elRef.nativeElement.style.display = 'none';
  }
  
}
