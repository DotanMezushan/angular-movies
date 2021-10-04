import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../utilities/utils';
import { MoviePostGetDTO,movieCreationDTO, movieDTO, homeDTO } from './movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + '/movies';

  public getHomePageMovies(): Observable<homeDTO>{
    return this.http.get<homeDTO>(this.apiURL)
  }
  public putGet(id:number):Observable<MoviePostGetDTO>{
    return this.http.get<MoviePostGetDTO>(`${this.apiURL}/putget/${id}`);
  }

  public edit(id:number , movieCreationDTO:movieCreationDTO){
    const fromData = this.BuildFormData(movieCreationDTO);
    return this.http.put(`${this.apiURL}/${id}`,fromData);
   }

  public getById(id:number):Observable<movieDTO>{
    return this.http.get<movieDTO>(`${this.apiURL}/${id}`);
  }

  public postGet(): Observable<MoviePostGetDTO>{
    return this.http.get<MoviePostGetDTO>(`${this.apiURL}/postget`);
  }

  public create(movieCreationDTO:movieCreationDTO): Observable<number>{
      const formData = this.BuildFormData(movieCreationDTO);
      return this.http.post<number>(this.apiURL ,formData);
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
