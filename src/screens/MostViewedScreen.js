import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React, {useEffect} from 'react';
import {ShowMovie} from '../components/MovieComponent';

const MostViewedScreen = props => {
  const {route} = props;
  const sortedMostViewed = route.params.allMostViewed;
  const {navigation} = props;
  useEffect(() => {
    console.log(sortedMostViewed.length);
  }, []);

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.mainDataContainer}
        data={sortedMostViewed}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            // <View style={styles.movieContainer}>
            //   <Image style={styles.movieImage} source={{uri: item.imageLink}} />
            // </View>
            <ShowMovie
              image={{uri: item.imageLink}}
              title={item.title}
              viewers={item.viewers}
              isHome={false}
              onPress={() => navigation.navigate('DetailMovie', {item})}
            />
          );
        }}
        numColumns={2}
        key={2}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainDataContainer: {
    padding: 8,
  },
  movieContainer: {
    margin: 8,
    padding: 16,
    backgroundColor: 'skyblue',
  },
  movieImage: {
    width: 130,
    height: 200,
  },
});

export default MostViewedScreen;
