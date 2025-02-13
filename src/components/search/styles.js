import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    searchSection: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#333",
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical: 10,
        width: "100%",
        height: 40,
        justifyContent: "center"
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        color: "#ddd",
        fontSize: 16,
        paddingVertical: 5,
    },
    searchButton: {
        backgroundColor: "#28a745",
        padding: 6,
        borderRadius: 20,
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    //Styling for search display
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
        backgroundColor: "#555",
        width: "90%",
        padding: 20,
        borderRadius: 10,
        maxHeight: 400,
    },
    heading: {
        fontSize: 20,
        fontWeight: "600",
        color: "#ddd",
        marginBottom: 10,
        textAlign: "center",
      },
    searchItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#333",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
    },
    movieImage: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 5,
    },
    searchItemText: {
        fontSize: 16,
        color: "#333",
        flexShrink: 1,
        fontWeight: "bold",
    },
    noResultsText: {
        textAlign: "center",
        fontSize: 16,
        color: "#888",
    },
    closeButton: {
        position: "absolute",
        top: 3,
        right: 3,
        padding: 10,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: "#ddd"
    },

});

export default styles;
