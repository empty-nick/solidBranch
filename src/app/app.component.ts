import { Component, OnInit } from '@angular/core';
import Data from '../assets/data.json';

export interface ICard {
  type: string;
  countTypes: number;
  link: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  transactionNum: number = Data.total;
  visibleValue = true;

  card: ICard[] = [];
  types = new Set<string>();

  countElements(type: string) {
    let counter: number = 0;
    for (const element of Data.data) {
      if (element.type == type) counter++
    }
    return counter;
  }

  ngOnInit() {
    Data.data.forEach(element => this.types.add(element.type));
    this.types.forEach(element => this.card.push({ type: element, countTypes: this.countElements(element), link: this.card.length }));
  }
}
