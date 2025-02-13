import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
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
        </View>
    );
};

export default Search;
