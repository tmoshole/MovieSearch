import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

/*
  The `movie` object passed to this component does not contain the `reviews` and `keywords` fields.
*/

const MovieDetails = ({ movie, navigation }) => {
  return (
    <>
      <Image source={{ uri: movie.primaryImage }} style={styles.image} />

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.detailsContainer}>
        <Text style={styles.title}>{movie.primaryTitle}</Text>
        <Text style={styles.subtitle}>{movie.releaseDate || "No title available"}</Text>

        <Text style={styles.sectionTitle}>Storyline</Text>
        <Text style={styles.text}>{movie.description || "No storyline available"}</Text>
        <Text style={styles.sectionTitle}>Genres</Text>
        <View style={styles.genreContainer}>
          {movie.genres?.length > 0 ? (
            movie.genres.map((genre, index) => (
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
            {movie.averageRating ? `${movie.averageRating} / 10` : "No rating available"}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Cast</Text>
        {movie.cast?.length > 0 ? (
          movie.cast.map((actor, index) => (
            <Text key={`${actor.id}-${index}`} style={styles.text}>
              {actor.fullName} as {actor.characters.join(", ")}
            </Text>
          ))
        ) : (
          <Text style={styles.text}>No cast information available</Text>
        )}
      </ScrollView>
    </>
  );
};

export default MovieDetails;
