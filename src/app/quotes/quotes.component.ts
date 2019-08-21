import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Life Quote', 'Keep looking up thats the secret of life', 'Hancel Asher','Alex muliande', new Date(2019, 1, 1)),
    new Quote(2, 'Social Quote', 'Those who realize their folly are not true fools', 'Victor Manuel','Tony wein', new Date(2019, 4, 19))
  ];

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
    addNewQuote(Quote){
      let quoteLength = this.quotes.length;
      Quote.id = quoteLength+1;
      Quote.completeDate = new Date(Quote.completeDate);
      this.quotes.push(Quote);
    }

    constructor() { }

    ngOnInit() {
    }
  }











 // toggleDetails(index){
  //   this.quotes[index].showDescription = !this.quotes[index].showDescription;
  // }