/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Navigation } from './presentation/navigation/Navigation';
import {
  SafeAreaView,
} from 'react-native';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>

  );
}
