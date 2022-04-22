import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit  {

  constructor() { }
  @Output() addReviewEvent = new EventEmitter();
  text: string="";
  text2: string="";

  ngOnInit(): void {
  }
  addReview(){

    const review={
        text:this.text,   
        description:this.text2
    };
    if(this.text!==""&&this.text2!==""){
      this.addReviewEvent.emit(review);
      this.text="";
      this.text2="";
     (document.getElementById('button1') as HTMLInputElement).disabled = true;
    }
    else {
      (document.getElementById('button1') as HTMLInputElement).disabled = true;
      alert('fill all the texts');
    }
    
  }
  enableButton(event:any){
    if(this.text!==""&&this.text2!=="")
    (document.getElementById('button1') as HTMLInputElement).disabled = false;
  }

}
