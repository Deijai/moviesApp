import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { NowPlayingResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import type { Movie } from '../../entities/movie.entity';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {


    try {
        const nowPlayingMovies = await fetcher.get<NowPlayingResponse>('/now_playing');
        return nowPlayingMovies.results.map(MovieMapper.fromMovieDbResultToEntity);
    } catch (error) {
        console.log({ error })
        throw new Error('Error fetching movies => NowPlaying')
    }



}