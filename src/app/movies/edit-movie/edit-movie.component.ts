import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO} from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  model!: movieDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
    
    });
  }
  saveChanges(movieCreationDTO:movieCreationDTO): void {

  }

}
