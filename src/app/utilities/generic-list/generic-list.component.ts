import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css']
})
export class GenericListComponent implements OnInit {

  constructor() { }
  @Input()
  list:any;

  ngOnInit(): void {
  }

}
