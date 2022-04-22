import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cardreview',
  templateUrl: './cardreview.component.html',
  styleUrls: ['./cardreview.component.css']
})
export class CardreviewComponent implements OnInit {

  constructor() { }
  @Input()review!: any;
  @Output() deleteEvent = new EventEmitter();

  ngOnInit(): void {
  }
  delete(review: any){
    this.deleteEvent.emit(review);  
  }

}
