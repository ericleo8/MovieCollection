import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {movieData} from '../../data/MovieData';
import {ShowMovie} from '../components/MovieComponent';
import {useEffect, useState} from 'react';
import {Icon} from '@rneui/themed';
// import {ButtonComponent} from '../components/ButtonComponent';
// import { MovieExplanation } from '../components/MovieComponent';

const HomeScreen = props => {
  const {navigation} = props;
  const [recommended, setRecommended] = useState([]);
  const [viewed, mostViewedMovies] = useState([]);
  const [allRecommended, setAllRecommended] = useState([]);
  const [allMostViewed, setAllMostViewed] = useState([]);
  const compareRating = (a, b) => {
    const ratingA = a.rating;
    const ratingB = b.rating;
    if (ratingA > ratingB) {
      return -1;
    } else if (ratingA < ratingB) {
      return 1;
    } else {
      return 0;
    }
  };
  const compareViewers = (a, b) => {
    const ratingA = a.viewers;
    const ratingB = b.viewers;
    if (ratingA > ratingB) {
      return -1;
    } else if (ratingA < ratingB) {
      return 1;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const threeRecommended = [];
    const threeMostViewed = [];

    const sortedMostViewed = [...movieData].sort(compareViewers);
    const sortedRecommended = [...movieData].sort(compareRating);

    setRecommended(threeRecommended);
    mostViewedMovies(threeMostViewed);
    setAllMostViewed(sortedMostViewed);
    setAllRecommended(sortedRecommended);

    for (let i = 0; i < 3; i++) {
      threeRecommended.push(sortedRecommended[i]);
    }
    for (let i = 0; i < 3; i++) {
      threeMostViewed.push(sortedMostViewed[i]);
    }
  }, []);
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={recommended}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({item}) => {
          return (
            <View style={styles.dataContainer}>
              <Image style={styles.movieImage} source={{uri: item.imageLink}} />
              <View style={styles.movieDescriptionContainer}>
                <Text style={styles.title}>
                  <Icon name="title" type="material" />
                  {item.title}
                </Text>
                <Text style={styles.yearContainer}>
                  <Icon name="calendar" type="entypo" />
                  {item.year}
                </Text>
                <Text>
                  <Icon name="star-rate" type="material" />
                  {item.rating === 5 ? (
                    <Image
                      style={styles.ratingStyle}
                      source={require('../../assets/five-stars.png')}
                    />
                  ) : item.rating === 4 ? (
                    <Image
                      style={styles.ratingStyle}
                      source={require('../../assets/four-stars.png')}
                    />
                  ) : item.rating === 3 ? (
                    <Image
                      style={styles.ratingStyle}
                      source={require('../../assets/three-stars.png')}
                    />
                  ) : item.rating === 2 ? (
                    <Image
                      style={styles.ratingStyle}
                      source={require('../../assets/two-stars.png')}
                    />
                  ) : (
                    <Image
                      style={styles.ratingStyle}
                      source={require('../../assets/star.png')}
                    />
                  )}
                </Text>
                {/* <ButtonComponent
                onPress={() => navigation.navigate('DetailMovie', {item})}
              /> */}
              </View>
            </View>
          );
        }}
        ListEmptyComponent={
          <View style={{alignItems: 'center'}}>
            <Text>No items in this category.</Text>
          </View>
        }
        ListHeaderComponent={
          <View>
            <View style={styles.mainCategoryContainer}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Most Viewed</Text>
              </View>
              <View style={styles.seeAllContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('MostViewedScreen', {allMostViewed})
                  }>
                  <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
              </View>
            </View>
            <FlatList
              horizontal
              data={viewed}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <ShowMovie
                    image={{uri: item.imageLink}}
                    title={item.title}
                    viewers={item.viewers}
                    isHome={true}
                  />
                );
              }}
              contentContainerStyle={{
                flex: mostViewedMovies.length === 0 ? 1 : null,
              }}
              ListEmptyComponent={
                <View style={{alignItems: 'center', flex: 1}}>
                  <Text>No items in this category.</Text>
                </View>
              }
            />
            <View style={styles.mainCategoryContainer}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Recommended</Text>
              </View>
              <View style={styles.seeAllContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Recommended', {allRecommended})
                  }>
                  <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
        // ListFooterComponent={
        //   <Text>
        //     An array of objects lets you store multiple values in a single
        //     variable. It stores a fixed-size sequential collection of elements
        //     of the same type. An array is used to store a collection of data,but
        //     it is often more useful to think of an array as a collection of
        //     variables of the same type.
        //   </Text>
        // }
      />
    </View>
  );
};



const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flatListContainer: {
    padding: 8,
  },
  movieImage: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },
  ratingStyle: {
    width: 100,
    height: 20,
  },
  dataContainer: {
    margin: 8,
    borderColor: '#96ceb4',
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginLeft: 5,
  },
  movieDescriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 8,
  },
  yearContainer: {
    marginTop: 8,
    marginBottom: 8,
  },
  mainCategoryContainer: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    flexDirection: 'row',
  },
  categoryContainer: {
    flex: 1,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  seeAllText: {
    color: '#009688',
    textDecorationLine: 'underline',
  },
});
export default HomeScreen;
