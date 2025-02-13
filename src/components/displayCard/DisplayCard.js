import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Card } from "react-native-paper";
import styles from "./styles";

const MovieCard = ({ movie, onSelectMovie }) => {
    return (
        <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => onSelectMovie(movie)}
        >
            <Card style={styles.card}>
                <Image source={{ uri: movie.primaryImage }} style={styles.movieImage} />
                <Card.Content style={styles.cardContent}>
                    <Text
                        style={styles.movieTitle}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        {movie.originalTitle}
                    </Text>
                    <View style={styles.ratingContainer}>
                        <Ionicons name="star" size={20} color="#FFD700" />
                        <Text style={styles.movieRating}>{movie.averageRating}/10</Text>
                    </View>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    );
};

export default MovieCard;
