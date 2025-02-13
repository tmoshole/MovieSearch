import React, { useEffect, useState } from "react";
import { View, FlatList, TextInput, TouchableOpacity, Text, Image, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadRandomMovies, searchForMovies, setSelectedMovie } from "../../store/movieReducer";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "react-native-vector-icons";
import { Card } from "react-native-paper";
import styles from "./styles";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { movies, searchResults, loading } = useSelector((state) => state.movies); 
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(loadRandomMovies());
  }, [dispatch]);

  const handleSearch = () => {
    if (query.length > 2) {
      dispatch(searchForMovies(query));
    }
  };

  const moviesToDisplay = searchResults.length > 0 ? searchResults.slice(0, 10) : movies.slice(0, 10);

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <TextInput
          placeholder="Search Movies..."
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
          style={styles.searchInput}
        />
      </View>

      {/* Loader */}
      {loading ? (
        <ActivityIndicator size="large" color="#FFD700" style={styles.loader} />
      ) : (
        <FlatList
          data={moviesToDisplay}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => {
                dispatch(setSelectedMovie(item));
                navigation.navigate("MovieDetail");
              }}
            >
              <Card style={styles.card}>
                <Image
                  source={{ uri: item.primaryImage }}
                  style={styles.movieImage}
                />
                <Card.Content style={styles.cardContent}>
                  <Text
                    style={styles.movieTitle}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {item.originalTitle}
                  </Text>
                  <View style={styles.ratingContainer}>
                    <FontAwesome name="star" size={16} color="#FFD700" />
                    <Text style={styles.movieRating}>{item.averageRating}/10</Text>
                  </View>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;
