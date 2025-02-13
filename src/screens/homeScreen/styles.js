import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const CARD_MARGIN = 10;
const CARD_WIDTH = (width - (CARD_MARGIN * 3)) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: 'center',
  },
  searchSection: {
    backgroundColor: "#444",
    padding: 20,
    marginBottom: 15,
    marginTop: 40,
    margin: 10,
    borderRadius: 8,
    width: "90%",
  },
  searchInput: {
    backgroundColor: "#555",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  cardContainer: {
    width: CARD_WIDTH,
    margin: CARD_MARGIN / 2,
  },
  card: {
    width: "100%",
    backgroundColor: "#555",
    borderRadius: 8,
    overflow: "hidden",
  },
  movieImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 10,
    minHeight: 90,
  },
  movieTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
  },
  movieRating: {
    color: "#ddd",
    fontSize: 14,
    marginLeft: 5,
  },
});

export default styles;