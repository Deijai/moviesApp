import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
import { Cast } from '../../../infrastructure/interfaces/movie-db.responses';

interface Props {
    actor: Cast
}

export const CastActor = ({ actor }: Props) => {    
    return (
        <View style={styles.container}>
            <Image
                style={{
                    width: 100,
                    height: 150,
                    borderRadius: 10
                }}
                source={{ uri: actor.profile_path ? actor.profile_path : 'https://i.stack.imgur.com/l60Hf.png' }} />
                <View style={styles.actorInfo}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>{actor.name}</Text>
                    <Text style={{fontSize: 12, opacity: 0.7}}>{actor.character}</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'column',
        width: 100
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4
    }
})
