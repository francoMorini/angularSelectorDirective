import { Component, Input } from '@angular/core';
import { ItemComponent } from '../../ui/item/item.component';
import { Selector } from './selector.interface';
import { TrackFocusDirective } from '../../../directives/track-focus.directive';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [ItemComponent, TrackFocusDirective],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss'
})
export class SelectorComponent {
  @Input() items: Selector[] | undefined;
  @Input() itemFocused: number | undefined;
}
