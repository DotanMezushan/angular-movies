import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor() { }
  title:string = 'angular-movies';

  ngOnInit(): void {

}
@Input()
movies:any;

remove(i:number):void {
  this.movies.splice(i, 1);
}

}

