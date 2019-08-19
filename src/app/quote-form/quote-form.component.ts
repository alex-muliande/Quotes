import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Input() quote: Quote
   newQuote = new Quote(0,"","","",new Date());

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote(0,"","","",new Date());
  }

  constructor() { }

  ngOnInit() {
  }

}
