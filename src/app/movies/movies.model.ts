import { actorsMovieDTO } from "../actors/actors.model";
import { genreDTO } from "../genres/genre.model";
import { movieTheaterDTO } from "../movie-theaters/movie-theather.model";

export interface movieCreationDTO {
    title: string;
    summary: string;
    poster: File;
    inTheaters:boolean;
    releaseDate: Date;
    trailer: string;
    genresIds: number[];
    movieTheatersIds: number[];
    actors: actorsMovieDTO[];
}
export interface movieDTO {
    id: number;
    title: string;
    summary: string;
    poster: string;
    inTheaters:boolean;
    releaseDate: Date;
    trailer: string;
    genres: genreDTO[];
    movieTheaters:movieTheaterDTO[];
    actors: actorsMovieDTO[];

}
export interface MoviePostGetDTO {
    genres: genreDTO[];
    movieTheaters: movieTheaterDTO[];
}
export interface homeDTO{
    inTheaters : movieDTO[];
    upcomingReleases : movieDTO[];
}
export interface homeDTO{
    inTheaters : movieDTO[];
    upcomingReleases : movieDTO[];
}
export interface MoviePostGetDTO {
    movie: movieDTO;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheaters : movieTheaterDTO[];
    nonSelectedMovieTheaters : movieTheaterDTO[];
    actors : actorsMovieDTO[];



}

