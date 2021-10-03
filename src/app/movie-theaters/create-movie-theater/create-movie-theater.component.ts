import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieTheatersService } from '../movie-theaters.service';
import { movieTheathersCreationDTO } from '../movie-theather.model';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrls: ['./create-movie-theater.component.css']
})
export class CreateMovieTheaterComponent implements OnInit {

  constructor(private movieTheatersService: MovieTheatersService , 
    private router :Router) { }

  ngOnInit(): void {
  }
  saveChanges(movieTheater: any):void{
    this.movieTheatersService.create(movieTheater).subscribe(()=>{
     this.router.navigate(['/movietheaters'])
    })
  }
}
