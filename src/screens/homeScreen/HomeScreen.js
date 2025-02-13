import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadRandomMovies, searchForMovies, setSelectedMovie } from "../../store/movieReducer";
import { useNavigation } from "@react-navigation/native";
import Search from "../../components/search/SearchComponent";
import SearchDisplay from "../../components/search/SearchDisplay";
import DisplayCard from "../../components/displayCard/DisplayCard";
import styles from "./styles";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { movies, searchResults, loading } = useSelector((state) => state.movies);
  const [query, setQuery] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(loadRandomMovies());
  }, [dispatch]);

  const handleSearch = () => {
    if (query.length > 2) {

      dispatch(searchForMovies(query));
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };


  const handleSelectMovie = (movie) => {
    dispatch(setSelectedMovie(movie));
    navigation.navigate("MovieDetail");
  };

  const moviesToDisplay = movies.slice(0, 10);

  return (
    <View style={styles.container}>

      <View style={styles.searchSection}>
        <Search
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
          searchResults={searchResults}
          loading={loading}
        />
      </View>

      <SearchDisplay
        visible={modalVisible}
        searchResults={searchResults?.results?.slice(0, 10) || []}
        onSelectMovie={handleSelectMovie}
        onClose={() => setModalVisible(false)}
        loading={loading}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#FFD700" style={styles.loader} />
      ) : (
        <FlatList
          data={moviesToDisplay}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <DisplayCard movie={item} onSelectMovie={handleSelectMovie} />
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;
