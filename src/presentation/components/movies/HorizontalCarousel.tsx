import React, { useEffect, useRef } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entity';
import { MoviePoster } from './MoviePoster';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    movies: Movie[],
    title?: string;
    loadNextPage?: () => void;
}


export const HorizontalCarousel = ({ movies, title, loadNextPage }: Props) => {
    const isLoading = useRef<boolean>(false);


    useEffect(() => {

        setTimeout(() => {
            isLoading.current = false;
        }, 200);
        

    }, [movies])
    

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if(isLoading.current === true) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

        if (!isEndReached) return;
        isLoading.current = true;
        // carregar novos movies
        loadNextPage && loadNextPage();
    }


    return (
        <View style={{ height: title ? 260 : 220 }}>

            {
                title && (
                    <Text
                        style={{ fontSize: 30, fontWeight: '300', marginLeft: 10, marginBottom: 10 }}>
                        {title}
                    </Text>
                )
            }

            <FlatList
                horizontal
                onScroll={onScroll}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                data={movies} renderItem={({ item }) => <MoviePoster movie={item} width={140} height={200} />} />
        </View>
    )
}
