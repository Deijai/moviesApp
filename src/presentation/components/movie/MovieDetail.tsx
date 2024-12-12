import React from 'react'
import { Text, View } from 'react-native'
import { FullMovie } from '../../../core/entities/movie.entity';
import { Formatter } from '../../../config/helpers/formatter';
import { Cast } from '../../../infrastructure/interfaces/movie-db.responses';
import { FlatList } from 'react-native-gesture-handler';
import { CastActor } from '../cast/CastActor';

interface Props {
  movie: FullMovie,
  casts: Cast[]
}

export const MovieDetail = ({ movie, casts }: Props) => {
  return (
    <>
      <View style={{ marginHorizontal: 20}}>
        <View style={{ flexDirection: 'row' }}>
          <Text>{movie.rating}</Text>
          <Text style={{ marginLeft: 5 }}>{movie.genres.join(', ')}</Text>
         
        </View>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>Historia</Text>
        <Text style={{fontSize: 16}}>{movie.description}</Text>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>Budget</Text>
        <Text style={{fontSize: 18}}>{Formatter.currency(movie.budget)}</Text>
      </View>

      {/*Atores*/}
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text style={{fontSize: 23, fontWeight: 'bold', marginVertical: 10, marginHorizontal: 20}}>Atores</Text>
        <FlatList 
        data={casts}
        horizontal
        showsHorizontalScrollIndicator={false} 
        keyExtractor={(item, index) => item.id.toString()} 
        renderItem={({ item }) => <CastActor actor={item} />} />
      </View>
    </>
  )
}
