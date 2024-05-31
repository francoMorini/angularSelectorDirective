import { Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[track]',
  standalone: true
})
export class TrackFocusDirective {

  private _renderer = inject(Renderer2);
  private _elRef = inject(ElementRef);

  @Input() set track(flag: boolean) {
    if(!flag){
      return;
    }
    this._renderer.selectRootElement(this._elRef).nativeElement.scrollIntoView({inline: 'center', behavior: 'smooth'});
  }

}
