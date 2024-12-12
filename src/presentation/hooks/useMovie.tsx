import { useEffect } from 'react'
import { useState } from 'react';
import { FullMovie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import { movieDbFetcher } from '../../config/adapters/movieDB.adapter';
import { Cast } from '../../infrastructure/interfaces/movie-db.responses';
export const useMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [movie, setMovie] = useState<FullMovie>();
    const [casts, setCasts] = useState<Cast[]>();

    useEffect(() => {
        initialLoad();
    }, [movieId]);

    const initialLoad = async () => {
        const [movieResult, castsResult] = await Promise.all([
            UseCases.getMovieByIdUseCase(movieDbFetcher, movieId),
            UseCases.getCastsUseCase(movieDbFetcher, movieId)
        ]);
        setMovie(movieResult);
        setCasts(castsResult);
        setIsLoading(false);
    }


    return {
        //properties
        isLoading,
        movie,
        casts,

        //methods
    }
}
