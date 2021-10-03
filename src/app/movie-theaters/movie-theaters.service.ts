import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import {  movieTheaterDTO, movieTheathersCreationDTO } from './movie-theather.model';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatersService {

  constructor(private http: HttpClient) { }
  private  apiURL  = environment.apiURL + '/movietheater';

  public create(movieTheathersDTO: movieTheathersCreationDTO){
    return this.http.post(this.apiURL,movieTheathersDTO);

  }
  public get(): Observable<movieTheaterDTO[]>{
    return this.http.get<movieTheaterDTO[]>(this.apiURL);
  }
  public getById(id: number): Observable<movieTheaterDTO>{
    return this.http.get<movieTheaterDTO>(`${this.apiURL}/${id}`);
  }
  public edit(id: number,movieTheaterDTO : movieTheathersCreationDTO){
    return this.http.put(`${this.apiURL}/${id}`, movieTheaterDTO);
  }
  public delete(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }

}
