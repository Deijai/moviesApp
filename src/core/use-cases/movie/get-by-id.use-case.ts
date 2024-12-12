import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBGetByID } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";

export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieid: number): Promise<FullMovie> => {


    try {
        const movie = await fetcher.get<MovieDBGetByID>(`/${movieid}`);        
        return MovieMapper.fromMovieDbResultToFullMovieEntity(movie);
    } catch (error) {
        console.log({ error })
        throw new Error(`Cannot get movie by id: ${movieid}`)
    }
}