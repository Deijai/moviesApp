import { useRoute } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetail } from '../../components/movie/MovieDetail';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> { }

export const DetailsScreen = ({ route }: Props) => {
    const { movieId } = route.params;
    const { isLoading, movie, casts } = useMovie(movieId);
    
    if(isLoading) {
        return <FullScreenLoader />
    }
    
    return (
        <ScrollView>
            {/*header*/}
            <MovieHeader movie={movie!} />
            {/*detail*/}
            <MovieDetail movie={movie!} casts={casts!} />
        </ScrollView>
    )
}
