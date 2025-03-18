import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  counter: number = 0;

  // click counter functionality
  btnEventHandle(event: string) {
    if (event == "dec") {
      // condition to check counter if zero
      if (this.counter > 0){
        this.counter -= 1;
      }
    } else if(event == "inc") {
      this.counter += 1;
    } else {
      this.counter = 0;
    }
  }
}
