import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { Selector } from '../selector/selector.interface';
import { DisplayByKeyDirective } from '../../../directives/display-by-key.directive';
import { ArrowsMoveControlDirective } from '../../../directives/arrows-move-control.directive';
import { Avatar } from './avatar.interface';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [DisplayByKeyDirective, ArrowsMoveControlDirective],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent implements OnInit {
  items: Selector[] | undefined;

  IMAGE_URL: string = './../../../assets/items';

  avatar: WritableSignal<Avatar> = signal({
    name: 'Haunter',
    username: 'haunter',
    image: `${this.IMAGE_URL}/093.png`,
  });

  ngOnInit(): void {
    this.items = [
      { text: 'Charizard', image: './../../../assets/items/006.png' },
      { text: 'Ninetales', image: './../../../assets/items/038.png' },
      { text: 'Poliwrath', image: './../../../assets/items/062.png' },
      { text: 'Alakazam', image: './../../../assets/items/064.png' },
      { text: 'Haunter', image: './../../../assets/items/093.png' },
    ];
  }

  setAvatar(selector: Selector): void {
    const avatar: Avatar = {
      name: selector.text!,
      username: selector.text!.toLowerCase(),
      image: selector.image!,
    };
    this.avatar.update(() => avatar);
  }
}
