import React from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import styles from "./styles";

const Search = ({ query, setQuery, handleSearch }) => {
    return (
        <View style={styles.searchSection}>
            <TextInput
                placeholder="Search Movies..."
                value={query}
                onChangeText={setQuery}
                style={styles.searchInput}
            />
            <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
                <FontAwesome name="search" size={20} color="#fff" />
            </TouchableOpacity>
            {/* TODO: Implement a dropdown that displays movie suggestions as the user types */}
        </View>
    );
};

export default Search;
