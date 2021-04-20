import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter = 0;

  count() {
    this.counter++;
  }

  getCount() {
    return this.counter;
  }
}
