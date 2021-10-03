import { Injectable } from '@angular/core';
import { genreCreationDTO, genreDTO } from './genre.model';
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }

  private apiURL: string =environment.apiURL + '/genres';

  getAll():Observable<genreDTO[]>{
    return this.http.get<genreDTO[]>(this.apiURL)
  }

  getByID(id:number): Observable<genreDTO>{
    return this.http.get<genreDTO>(`${this.apiURL}/${id}`);
  }


  create(genre :genreCreationDTO): any {
      return this.http.post(this.apiURL,genre)
  }

  edit(id:number, genre :genreCreationDTO){
    return this.http.put(`${this.apiURL}/${id}`, genre);
  }

  delete(id:number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }



  



}
