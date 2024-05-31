import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-tag[title]',
  standalone: true,
  imports: [],
  templateUrl: './info-tag.component.html',
  styleUrl: './info-tag.component.scss'
})
export class InfoTagComponent {
  @Input() title!: string;
  @Input() icon: string | undefined = 'bi-keyboard';
}
