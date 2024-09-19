import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';

// COMMAND FOR FINDING & IMPORTING THE COMPONENT (Movieitem.js)
import MovieItem from './components/MovieItem.js';

// LIST FUNCTIONS FOR MOVIE RATINGS
export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      name: "Clueless",
      image: require("./assets/images/Clueless.jpeg"),
      rating: "4",
    },
    {
      name: "Coraline",
      image: require("./assets/images/Coraline.jpeg"),
      rating: "5",
    },
    {
      name: "Crazy Rich Asians",
      image: require("./assets/images/CrazyRichAsians.jpeg"),
      rating: "5",
    },
    {
      name: "Legally Blonde",
      image: require("./assets/images/LegallyBlonde.jpeg"),
      rating: "5",
    },
    {
      name: "Mean Girls",
      image: require("./assets/images/MeanGirls.jpeg"),
      rating: "5",
    },
    {
      name: "Saw",
      image: require("./assets/images/Saw.jpeg"),
      rating: "5",
    },{
      name: "Scream",
      image: require("./assets/images/Scream.jpeg"),
      rating: "5",
    },{
      name: "Smile",
      image: require("./assets/images/Smile.jpeg"),
      rating: "5",
    },{
      name: "The Maze Runner",
      image: require("./assets/images/TheMazeRunner.jpeg"),
      rating: "5",
    },{
      name: "Us",
      image: require("./assets/images/Us.jpeg"),
      rating: "5",
    },
  ]);


return (
  <>
  {/* STATUS BAR STYLING*/}
  <StatusBar style="auto" />
    {/* ROOT CONTAINER (WHOLE SCREEN) */}
    <SafeAreaView style={styles.rootContainer}>
      {/* TITLE CONTAINER */}
      <View style={styles.titleContainer}> 
        <Text style={styles.title}> Blessing's Top 10 Movies 🍿 </Text>
      </View>

      {/* LIST OF MOVIE ITEMS */}
      <View style={styles.movieList}> 
        <ScrollView> 
          {movieItems.map((movieData) => (
            <MovieItem 
              key={movieData.name}
              name={movieData.name} 
              image={movieData.image} 
              rating={movieData.rating}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>  
  </>
  );
} 

// STYLE SHEET FOR MOVIE LIST
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fffff3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },

  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10
  },

  title: {
    fontSize: 20,
    fontWeight: "bold"

  },

  movieList: {
    flex: 8,
    width: "80%" 
    
  }
});
