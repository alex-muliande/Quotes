import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})

export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  upVotes: number = 0;
  downVotes: number = 0;
  
  likeButtonClick(){
     this.upVotes ++;
   }

   dislikeButtonClick(){
     this.downVotes ++;
   }
  // constructor() {
  //   this.upvotes = 0;
  //   this.downvotes = 0;
  // }
  // upVote(): boolean {
  //   this.upvotes += 1;
  //   return false;
  // }
  // downVote(): boolean {
  //   this.downvotes += 1;
  //   return false;
  // }


  ngOnInit() {
  }

}
