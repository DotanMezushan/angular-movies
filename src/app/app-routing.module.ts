import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {IndexGenresComponent} from './genres/index-genres/index-genres.component'
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexMovieTheaterComponent } from './movie-theaters/index-movie-theater/index-movie-theater.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { CreateMovieTheaterComponent } from './movie-theaters/create-movie-theater/create-movie-theater.component';
import { IndexActorComponent } from './actors/index-actor/index-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { EditMovieTheathersComponent } from './movie-theaters/edit-movie-theathers/edit-movie-theathers.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';

const routes: Routes = [
  { path: '',component:HomeComponent},

  { path: 'genres',component:IndexGenresComponent},
  { path:'genres/create', component:CreateGenreComponent},
  { path:'genres/edit/:id',component:EditGenreComponent},

  { path: 'actors',component:IndexActorComponent},
  { path:'actors/create', component:CreateActorComponent},
  { path:'actors/edit/:id',component:EditActorComponent},

  { path: 'movietheaters',component:IndexMovieTheaterComponent},
  { path:'movietheaters/create', component:CreateMovieTheaterComponent},
  { path:'movietheaters/edit/:id',component:EditMovieTheathersComponent},

  { path:'movies/create', component:CreateMovieComponent},
  { path:'movies/edit/:id',component:EditMovieComponent},
  { path:'movies/filter',component:MovieFilterComponent},
  { path:'movies/:id',component:MovieDetailsComponent},
  { path:'**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
