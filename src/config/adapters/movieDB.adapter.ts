import { OriginalLanguage } from "../../infrastructure/interfaces/movie-db.responses";
import { AxiosAdapter } from "./http/axios.adapter";
import { THE_MOVIE_DB_KEY,  } from '@env';

export const movieDbFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        language: OriginalLanguage.Pt,
        api_key: THE_MOVIE_DB_KEY ?? 'no-key'
    }
});