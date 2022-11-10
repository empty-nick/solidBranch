import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  // Array from the app.component
  @Input() card: ICard

  ngOnInit() { }
}
