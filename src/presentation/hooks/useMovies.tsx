import { useEffect, useState } from 'react'
import { Movie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import { movieDbFetcher } from '../../config/adapters/movieDB.adapter';

let popularPage: number = 1;

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);


  useEffect(() => {
    initialLoad();
  }, []);


  const initialLoad = async () => {

    const [
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upcomingMovies
    ] = await Promise.all([
      UseCases.moviesNowPlayingUseCase(movieDbFetcher),
      UseCases.moviesPopularUseCase(movieDbFetcher),
      UseCases.moviesTopRatedUseCase(movieDbFetcher),
      UseCases.moviesUpcomingUseCase(movieDbFetcher),
    ]);


    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);

    setIsLoading(false);


  }



  return {
    // properties
    isLoading,
    nowPlaying,
    popular,
    upcoming,
    topRated,

    // methods
    popularNexPage: async () => {
      popularPage++;
      const popularMovies = await UseCases.moviesPopularUseCase(movieDbFetcher, {page: popularPage});
      setPopular((prev) => [...prev, ...popularMovies])
    }
  }
}
