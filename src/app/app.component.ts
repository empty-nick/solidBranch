import { Component, OnInit } from '@angular/core';
import Data from '../assets/data.json';

/**
 * Creating interface ICard for an array "card"
 * countTypes contains counted types of objects in .json file
 */
export interface ICard {
  type: string;
  countTypes: number;
  index: number;
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
    // Adding types to the Set to avoid duplicates. After that filling the array of objects by interface ICard
    Data.data.forEach(element => this.types.add(element.type));
    this.types.forEach(element => this.card.push({ type: element, countTypes: this.countElements(element), index: this.card.length }));
  }
}
