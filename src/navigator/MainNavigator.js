import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailMovieScreen from '../screens/DetailMovieScreen';
import MostViewedScreen from '../screens/MostViewedScreen';
import RecommendedScreen from '../screens/RecommendedScreen';
// import HomeScreenSong from '../screens/HomeScreenSong';
const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Movie Collection',
            headerStyle: {
              backgroundColor: '#65c3ba',
            },
            headerTitleStyle: {
              color: 'black',
              fontSize: 24,
            },
            headerTitleAlign: 'center',
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="DetailMovie"
          component={DetailMovieScreen}
          options={{
            title: 'Detail',
            headerStyle: {
              backgroundColor: '#65c3ba',
            },
            headerTitleStyle: {
              color: 'black',
              fontSize: 24,
            },
            // headerTitleAlign: 'center',
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="MostViewedScreen"
          component={MostViewedScreen}
          options={{
            title: 'Most Viewed',
            headerStyle: {
              backgroundColor: '#65c3ba',
            },
            headerTitleStyle: {
              color: 'black',
              fontSize: 24,
            },
            // headerTitleAlign: 'center',
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Recommended"
          component={RecommendedScreen}
          options={{
            title: 'Recommended',
            headerStyle: {
              backgroundColor: '#65c3ba',
            },
            headerTitleStyle: {
              color: 'black',
              fontSize: 24,
            },
            // headerTitleAlign: 'center',
            headerLeft: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
