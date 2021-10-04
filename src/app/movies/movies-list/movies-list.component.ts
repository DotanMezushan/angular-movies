import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { movieDTO } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }
  title:string = 'angular-movies';

  ngOnInit(): void {

}
@Input()
movies!:any;
@Output()
onDelete =new EventEmitter<void>();

remove(id:number):void {
  this.movies.splice(id, 1);
  this.moviesService.delete(id).subscribe(()=>{
      this.onDelete.emit();
  });
}

}

