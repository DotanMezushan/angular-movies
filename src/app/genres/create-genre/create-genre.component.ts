import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseWebApiErrors } from 'src/app/utilities/utils';
import {genreCreationDTO}  from '../genre.model';
import { GenresService } from '../genres.service';



@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {
  errors: string[]=[];

  constructor(private router: Router, private genresService:GenresService) { }


  ngOnInit(): void {
  }
  saveChanges(genreCreationDTO: genreCreationDTO):any {
    this.genresService.create(genreCreationDTO).subscribe(() => {
      this.router.navigate(['/genres']);
    },(error:any) =>this.errors =parseWebApiErrors(error));
 
  }
} 


