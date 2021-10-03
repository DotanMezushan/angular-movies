import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {genreCreationDTO, genreDTO} from '../genre.model'
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
     private genresService: GenresService,
     private router: Router) { }

  model!:genreDTO ;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
       this.genresService.getByID(params.id).subscribe(genre =>{
         this.model=genre;
       });
     });
  }
  saveChanges(genreCreationDTO :genreCreationDTO):void {
    this.genresService.edit(this.model.id,genreCreationDTO).subscribe(()=>{
      this.router.navigate(["/genres"]);
    });
  }

}
