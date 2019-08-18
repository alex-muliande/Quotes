import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    {id:1,name: 'Life Quote',description:'Life is full of life when you join the troops'},
    {id:2,name: 'Social Quote',description: 'Life is full of life when you join the troops'}
  ];

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  // toggleDetails(index){
  //   this.quotes[index].showDescription = !this.quotes[index].showDescription;
  // }
  constructor() { }

  ngOnInit() {
  }

}
