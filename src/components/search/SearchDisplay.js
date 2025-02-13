import React from "react";
import { Modal, View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import styles from "./styles";

const SearchDisplay = ({ visible, searchResults, onSelectMovie, onClose, loading }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <FontAwesome name="times" size={20} color="#ddd" />
                    </TouchableOpacity>
                    <Text style={styles.heading}>Search Results</Text>

                    {loading ? (
                        <ActivityIndicator size="large" color="#FFD700" style={styles.loader} />
                    ) : (
                        searchResults.length > 0 ? (
                            <FlatList
                                data={searchResults}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={styles.searchItem}
                                        onPress={() => {
                                            onSelectMovie(item);
                                            onClose();
                                        }}
                                    >
                                        <Image
                                            source={{ uri: item.primaryImage }}
                                            style={styles.movieImage}
                                        />
                                        <Text style={styles.searchItemText}>{item.originalTitle}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        ) : (
                            <Text style={styles.noResultsText}>No results found</Text>
                        )
                    )}
                </View>
            </View>
        </Modal>
    );
};

export default SearchDisplay;
