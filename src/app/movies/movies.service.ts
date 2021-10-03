import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../utilities/utils';
import { MoviePostGetDTO,movieCreationDTO, movieDTO } from './movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + '/movies';

  public getById(id:number):Observable<movieDTO>{
    return this.http.get<movieDTO>(`${this.apiURL}/${id}`);
  }

  public postGet(): Observable<MoviePostGetDTO>{
    return this.http.get<MoviePostGetDTO>(`${this.apiURL}/postget`);
  }

  public create(movieCreationDTO:movieCreationDTO){
      const formData = this.BuildFormData(movieCreationDTO);
      return this.http.post(this.apiURL ,formData);
  }

  private BuildFormData(movie:movieCreationDTO):FormData{
    const formData = new FormData();
    formData.append('title',movie.title);
    formData.append('summary',movie.summary);
    formData.append('trailer',movie.trailer);
    formData.append('inTheaters',String( movie.inTheaters));
    if(movie.releaseDate){
      formData.append('releaseDate', formatDateFormData( movie.releaseDate));
    }
    
    if(movie.poster){
      formData.append('poster',movie.poster);
    }

    formData.append('GenresIds',JSON.stringify( movie.genresIds));
    formData.append('MovieTheatersIds',JSON.stringify( movie.movieTheatersIds));
    formData.append('actors',JSON.stringify( movie.actors));
   

    return formData;
  }


}
