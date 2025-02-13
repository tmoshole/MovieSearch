import React, { useEffect } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../../store/movieReducer";
import styles from "./styles";
import MovieDetails from "../../components/movieDetails/MovieDetails";

const MovieDetailScreen = ({ navigation, route }) => {
  const { movieId } = route.params;
  const dispatch = useDispatch();
  const { selectedMovieDetails, loading, error } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch, movieId]);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#FF6F00" style={styles.loader} />}

      {!loading && selectedMovieDetails && (
        <MovieDetails movie={selectedMovieDetails} navigation={navigation} />
      )}

      {!loading && !error && !selectedMovieDetails && (
        <Text style={styles.text}>No movie details available</Text>
      )}
    </View>
  );
};

export default MovieDetailScreen;
