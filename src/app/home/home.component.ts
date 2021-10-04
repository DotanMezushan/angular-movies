import { Component, OnInit } from '@angular/core';
import { homeDTO, movieDTO } from '../movies/movies.model';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private moviesService: MoviesService){}
  ngOnInit(): void {
    this.moviesService.getHomePageMovies().subscribe(homeDTO =>{
      this.moviesInTheaters = homeDTO.inTheaters;
      this.moviesFutureReleases=   homeDTO.upcomingReleases;

    });

  }

  moviesInTheaters!:movieDTO[] ;
  moviesFutureReleases!:movieDTO[] ; 

}
