import {
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { Selector } from '../shared/components/selector/selector.interface';
import { SelectorComponent } from '../shared/components/selector/selector.component';

@Directive({
  selector: '[moveControl]',
  standalone: true,
})
export class ArrowsMoveControlDirective implements OnInit {
  private _elRef = inject(ElementRef);
  private _viewContainerRef = inject(ViewContainerRef);
  private _renderer = inject(Renderer2);
  private _selectorComponent: ComponentRef<SelectorComponent> | undefined;

  private _index: number = 0;

  @Input() moveControl: Selector[] | undefined;
  @Input() name: string = 'item';
  @Output() onSelect: EventEmitter<Selector> = new EventEmitter();

  @HostListener('document:keydown', ['$event']) onKeyDown(
    event: KeyboardEvent
  ): void {
    if (this._elRef.nativeElement.style.display === 'none') {
      return;
    }
    if (!!!this.moveControl) {
      return;
    }

    if(event.key === 'Enter'){
      this.onSelect.emit(this.moveControl[this._index]);
      this._elRef.nativeElement.style.display = 'none';
      return;
    }

    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
      return;
    }

    const quantity: number = event.key === 'ArrowLeft' ? -1 : 1;
    this.move(quantity);
  }

  ngOnInit(): void {
    this.createItemList();
  }

  move(quantity: number) {
    if (this._index === 0 && quantity === -1) {
      return;
    }
    if (this._index === this.moveControl!.length! - 1 && quantity === 1) {
      return;
    }

    this._index = this._index + quantity;
    this._selectorComponent!.instance.itemFocused = this._index;
  }

  createItemList(): void {
    const viewContainerRef = this._viewContainerRef;
    viewContainerRef.clear();

    const childViewContainerRef = viewContainerRef.createComponent(
      SelectorComponent,
      { index: 0, injector: viewContainerRef.injector }
    );

    this._selectorComponent = childViewContainerRef;

    childViewContainerRef.instance.items = this.moveControl;
    childViewContainerRef.instance.itemFocused = this._index;

    this._renderer.appendChild(
      this._elRef.nativeElement,
      childViewContainerRef.location.nativeElement
    );
  }
}
