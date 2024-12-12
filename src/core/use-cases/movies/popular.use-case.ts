import { HttpAdapter } from "../../../config/adapters/http/http.adapter"
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity"

interface Options {
    page?: number;
    limit?: number;
}

export const moviesPopularUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {


    try {
        const popularMovies = await fetcher.get<MovieDBMoviesResponse>('/popular', {
            params: {
                page: options?.page ?? 1,
            }
        });
        return popularMovies.results.map(MovieMapper.fromMovieDbResultToEntity);
    } catch (error) {
        console.log({ error })
        throw new Error('Error fetching movies => Popular')
    }



}