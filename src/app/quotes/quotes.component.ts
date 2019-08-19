import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    {id:1,name: 'Life Quote',description:'Keep looking up thats the secret of life-Hancel Asher',upvotes:0,downvotes:0},
    {id:2,name: 'Social Quote',description: 'Those who realize their folly are not true fools -Victor Manuel',upvotes:0,downvotes:0}
  ];
  quoteDelete(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
 

  constructor() { }

  ngOnInit() {
  }

}








 // toggleDetails(index){
  //   this.quotes[index].showDescription = !this.quotes[index].showDescription;
  // }