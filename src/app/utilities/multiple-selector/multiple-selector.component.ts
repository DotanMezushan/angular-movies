import { Component, Input, OnInit } from '@angular/core';
import { multipleSelectorModel } from './multiple-selector.model';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css']
})
export class MultipleSelectorComponent implements OnInit {

  constructor() { }

  @Input()
  SelectedItems: multipleSelectorModel[]=[];
  @Input()
  NonSelectedItems: multipleSelectorModel[]=[];


  ngOnInit(): void {
  }


  select(item:multipleSelectorModel,index:number): void {
    this.SelectedItems.push(item);
    this.NonSelectedItems.splice(index, 1);
  }

  deselect(item:multipleSelectorModel,index:number): void {
    this.NonSelectedItems.push(item);
    this.SelectedItems.splice(index, 1);
  }

  selectAll(): void{
    this.SelectedItems.push(...this.NonSelectedItems);
    this.NonSelectedItems=[];
  }


  deSelectAll(): void {
    this.NonSelectedItems.push(...this.SelectedItems);
    this.SelectedItems=[];
  }

}
