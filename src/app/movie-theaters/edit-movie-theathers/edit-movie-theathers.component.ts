import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieTheatersService } from '../movie-theaters.service';
import { movieTheaterDTO, movieTheathersCreationDTO } from '../movie-theather.model';

@Component({
  selector: 'app-edit-movie-theathers',
  templateUrl: './edit-movie-theathers.component.html',
  styleUrls: ['./edit-movie-theathers.component.css']
})
export class EditMovieTheathersComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
     private movieTheatersService:MovieTheatersService,
     private router: Router) { }

  //model: movieTheaterDTO = {name:'Tel-Aviv' , latitude:32.08678148088209, longitude:34.790199275594205 };
  model!: movieTheaterDTO;
 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movieTheatersService.getById(params.id).subscribe(
        movieTheater => this.model = movieTheater);

    });
  }
  saveChanges(movieTheathersCreationDTO:movieTheathersCreationDTO | any):void{
      this.movieTheatersService.edit(this.model.id,movieTheathersCreationDTO).subscribe(()=>
       this.router.navigate(['/movietheaters']) );
  }

}
