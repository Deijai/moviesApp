import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { Cast, MovieDBCreditsResponse } from '../../../infrastructure/interfaces/movie-db.responses';

export const getCastsUseCase = async (fetcher: HttpAdapter, movieid: number): Promise<Cast[]> => {

    try {
        const casts = await fetcher.get<MovieDBCreditsResponse>(`/${movieid}/credits`);        
        return casts.cast.map(item =>  {
            if (item.profile_path) {
                item.profile_path = `https://image.tmdb.org/t/p/w500${item.profile_path}`
            } else {
                item.profile_path = `https://i.stack.imgur.com/l60Hf.png`
            }

            return item;
        } );
    } catch (error) {
        console.log({ error })
        throw new Error(`Cannot get movie cast by id: ${movieid}`)
    }
}