import { Component, OnInit } from '@angular/core';
import { SelectorComponent } from '../../shared/components/selector/selector.component';
import { Selector } from '../../shared/components/selector/selector.interface';
import { DisplayByKeyDirective } from '../../directives/display-by-key.directive';
import { ArrowsMoveControlDirective } from '../../directives/arrows-move-control.directive';
import { ItemComponent } from '../../shared/ui/item/item.component';
import { InfoTagComponent } from '../../shared/ui/info-tag/info-tag.component';
import { AvatarComponent } from '../../shared/components/avatar/avatar.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    SelectorComponent,
    DisplayByKeyDirective,
    ArrowsMoveControlDirective,
    ItemComponent,
    InfoTagComponent,
    AvatarComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit {
  items: Selector[] | undefined;

  items2: Selector[] | undefined;

  log(e: any) {
    console.log(e);
  }

  ngOnInit(): void {
    this.items = [
      { text: 'Charizard', image: './../../../assets/items/006.png' },
      { text: 'Ninetales', image: './../../../assets/items/038.png' },
      { text: 'Poliwrath', image: './../../../assets/items/062.png' },
      { text: 'Alakazam', image: './../../../assets/items/064.png' },
      { text: 'Haunter', image: './../../../assets/items/093.png' },
    ];
    this.items2 = [
      { text: 'Angular' },
      { text: 'React' },
      { text: 'Javascript' },
      { text: 'NodeJS' },
    ];
  }
}
