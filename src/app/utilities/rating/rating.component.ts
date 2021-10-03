import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }
  @Input()
  maxRating:number =5;
  selectedRate:number =0;
  previousRate:number =0;
  maxRatingArray:any =[];

  ngOnInit(): void {
    this.maxRatingArray =Array(this.maxRating).fill(0);
  }
  handleMouseEnter(index:number): void {
    this.selectedRate=index+1;
  }
  handleMouseLeave(): void {
    if(this.previousRate !=0 ){
      this.selectedRate=this.previousRate;
    }else{
      this.selectedRate=0;
    }
   
  }
  rate(index:number): void {
    this.selectedRate=index+1;
    this.previousRate=this.selectedRate;

  }

}
