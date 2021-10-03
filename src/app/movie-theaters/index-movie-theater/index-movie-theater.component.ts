import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieTheatersService } from '../movie-theaters.service';
import { movieTheaterDTO } from '../movie-theather.model';

@Component({
  selector: 'app-index-movie-theater',
  templateUrl: './index-movie-theater.component.html',
  styleUrls: ['./index-movie-theater.component.css']
})
export class IndexMovieTheaterComponent implements OnInit {

  constructor(private movieTheatersService :MovieTheatersService, 
    private router : Router) { }
  movieTheaters!: movieTheaterDTO[];
  displayColumns:string[] =['name','actions'];

  ngOnInit(): void {
    this.loadData();
  }
  loadData(): void {
    this.movieTheatersService.get().subscribe((movieTheaters)=>{
      this.movieTheaters=movieTheaters;
  });
  }

  delete(id:number): void {
      this.movieTheatersService.delete(id).subscribe(()=>
      this.loadData()
     );
       
  }

}
