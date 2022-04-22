import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlreview',
  templateUrl: './controlreview.component.html',
  styleUrls: ['./controlreview.component.css']
})
export class ControlreviewComponent implements OnInit {
  reviews = [
    {
      text: 'Angular step1' ,description:'deadline 21-4'
    },
    {
      text: 'Angular step2' ,description:'deadline 21-4'
    }
    ,{
      text: 'Angular step3' ,description:'deadline 21-4'
    }
    ,{
      text: 'User Reviews System' ,description:'deadline 23-4'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  deleteReview(review:any){
    this.reviews = this.reviews.filter(obj => obj !==review);
  }

 addReview(review:any){
    this.reviews.push(review);
 }

}
