import React from 'react'
import { Text, View } from 'react-native'
import { useMovies } from '../../hooks/useMovies'
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, nowPlaying, popular, upcoming, topRated, popularNexPage } = useMovies();

  if (isLoading) {
    return <FullScreenLoader />
  }
  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingTop: 30 }}>

        {/*Principal*/}
        <PosterCarousel movies={nowPlaying} />

        {/*Lançamentos*/}
        <HorizontalCarousel movies={upcoming} title='Lançamentos' />

        {/*Populares*/}
        <HorizontalCarousel movies={popular} title='Populares' loadNextPage={popularNexPage} />

        {/*Top*/}
        <HorizontalCarousel movies={topRated} title='Top' />


      </View>
    </ScrollView>
  )
}
