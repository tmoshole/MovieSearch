import React, { useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../../store/movieReducer";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

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
        <>
          <Image source={{ uri: selectedMovieDetails.primaryImage }} style={styles.image} />

          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
          </TouchableOpacity>

          <ScrollView contentContainerStyle={styles.detailsContainer}>
            <Text style={styles.title}>{selectedMovieDetails.primaryTitle}</Text>
            <Text style={styles.subtitle}>
              {selectedMovieDetails.releaseDate || "No title available"}
            </Text>

            <Text style={styles.sectionTitle}>Storyline</Text>
            <Text style={styles.text}>
              {selectedMovieDetails.description || "No storyline available"}
            </Text>

            <Text style={styles.sectionTitle}>Genres</Text>
            <View style={styles.genreContainer}>
              {selectedMovieDetails.genres?.length > 0 ? (
                selectedMovieDetails.genres.map((genre, index) => (
                  <Text key={`genre-${index}`} style={styles.genre}>
                    {genre}
                  </Text>
                ))
              ) : (
                <Text style={styles.text}>No genres available</Text>
              )}
            </View>

            <Text style={styles.sectionTitle}>Rating</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={20} color="#FFD700" />
              <Text style={styles.ratingText}>
                {selectedMovieDetails.averageRating
                  ? `${selectedMovieDetails.averageRating} / 10`
                  : "No rating available"}
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Cast</Text>
            {selectedMovieDetails.cast?.length > 0 ? (
              selectedMovieDetails.cast.map((actor, index) => (
                <Text key={`${actor.id}-${index}`} style={styles.text}>
                  {actor.fullName} as {actor.characters.join(", ")}
                </Text>
              ))
            ) : (
              <Text style={styles.text}>No cast information available</Text>
            )}
          </ScrollView>
        </>
      )}

      {!loading && !error && !selectedMovieDetails && (
        <Text style={styles.text}>No movie details available</Text>
      )}
    </View>
  );
};

export default MovieDetailScreen;
