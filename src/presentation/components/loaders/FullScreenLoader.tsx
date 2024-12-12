import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export const FullScreenLoader = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} color={'indingo'} />
    </View>
  )
}
