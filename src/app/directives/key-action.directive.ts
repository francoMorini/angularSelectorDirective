import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[key]',
  standalone: true
})
export class KeyActionDirective {
  @Input() key: string | undefined;
  @Output() keyPressed: EventEmitter<void> = new EventEmitter();

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    console.log(event.key)
    if(event.key === this.key){
      this.keyPressed.emit();
    }
  }
}
