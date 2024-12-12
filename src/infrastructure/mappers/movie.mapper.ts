import type { Cast, MovieDBGetByID, Result } from '../interfaces/movie-db.responses';
import { FullMovie, Movie } from '../../core/entities/movie.entity';
export class MovieMapper {
    static fromMovieDbResultToEntity(result: Result): Movie {
        return {
            id: result.id,
            title: result.title,
            releaseDate: new Date(result.release_date),
            description: result.overview,
            backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            rating: result.vote_average

        }
    }


    static fromMovieDbResultToFullMovieEntity(result: MovieDBGetByID): FullMovie {
        return {
            id: result.id,
            title: result.title,
            releaseDate: new Date(result.release_date),
            description: result.overview,
            backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            rating: result.vote_average,
            budget: result.budget,
            duration: result.runtime,
            genres: result.genres.map(item => item.name),
            originalTitle: result.original_title,
            productionCompanies: result.production_companies.map(item => item.name),
        }
    }
    
}