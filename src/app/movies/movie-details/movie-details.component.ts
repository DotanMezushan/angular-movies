import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {  coordinatesMapWithMessage } from 'src/app/utilities/map/coordinate';
import { movieDTO } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private moviesService: MoviesService , 
    private activatedRoute :ActivatedRoute
    ,private sanitizer:DomSanitizer) { }


    movie!: movieDTO;
    releaseDate !: Date ;
    trailerURL !: SafeResourceUrl;
    coordinates !: coordinatesMapWithMessage[];


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.moviesService.getById(params.id).subscribe((movie) => {
         this.movie=movie;
         this.releaseDate=new Date(movie.releaseDate);
         this.trailerURL = this.generateYoutubeURLForEmbeddedVideo(movie.trailer);
         this.coordinates = movie.movieTheaters.map(movieTheaters => {
            return {latitude:movieTheaters.latitude,longitude:movieTheaters.longitude,
            message:movieTheaters.name}
         });
      });
    });
  }
  
  generateYoutubeURLForEmbeddedVideo(url :string): SafeResourceUrl {
    if(!url){
      return '';
    }
    //https://www.youtube.com/watch?v=LKFuXETZUsI
    //so the id is LKFuXETZUsI
    //https://youtu.be/LKFuXETZUsI
    let videoId = url.split('v=')[1];
    //in case we have &
    const ampersandPosition = videoId.indexOf('&');
    if(ampersandPosition!== -1){
      videoId=videoId.substring(0,ampersandPosition);
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }


}
