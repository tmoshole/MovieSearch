import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { useSelector } from "react-redux";

const MovieDetailScreen = () => {
  const selectedMovie = useSelector((state) => state.movies.selectedMovie);

  if (!selectedMovie) return <Text>Loading...</Text>;

  return (
    <View>
      <Image source={{ uri: selectedMovie.poster }} style={{ width: 200, height: 300 }} />
      <Text>{selectedMovie.title}</Text>
      <Text>{selectedMovie.description}</Text>
      <Text>Actors: {selectedMovie.actors.join(", ")}</Text>

      <Text>Reviews:</Text>
      <FlatList
        data={selectedMovie.reviews}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default MovieDetailScreen;
