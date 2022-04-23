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
  
  contentEditable: boolean = false;
  contentDisaplayButtpn:string ="none";
  saveBtn :any;
  bntStyle: string='btn-change';
  
  ngOnInit(): void {
     
  }
  
  delete(review: any){
    this.deleteEvent.emit(review);  
  }

  edit(review: any){
    this.bntStyle = 'btn-default';
    this.contentEditable = true;
    var saveBtn = (document.getElementById('save-button') as HTMLButtonElement);
   // saveBtn.style.display = "inline";    
  }
  
  save(review : any){ 
    this.bntStyle = 'btn-change';
    this.contentEditable = false; 
    var saveBtn = (document.getElementById('save-button') as HTMLButtonElement );
    //saveBtn.style.display = "none";
    //this.contentDisaplayButtpn= "none";
  }
  
  
}
