import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlreview',
  templateUrl: './controlreview.component.html',
  styleUrls: ['./controlreview.component.css']
})
export class ControlreviewComponent implements OnInit {
  reviews = [
    {
      text: 'c' ,description:'deadline 21-4'
    },
    {
      text: 'h' ,description:'deadline 21-4'
    }
    ,{
      text: 'f' ,description:'deadline 21-4'
    }
    ,{
      text: 'e' ,description:'deadline 23-4'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  deleteReview(review:any){
    this.reviews = this.reviews.filter(obj => obj !==review);
  }

 addReview(review:any){
   if(review.text )
    this.reviews.push(review);
 }

 sortfunc(){
  this.reviews.sort(function (a :any, b:any) {
    return a.text.localeCompare(b.text);
  });
 }
 
 public sortfunc2(){
  let i=0;
  this.reviews.sort(function (a :any, b:any) {
    return b.text.localeCompare(a.text);
  });
 }
 

}
