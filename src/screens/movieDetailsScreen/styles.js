import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    zIndex: 10,
  },
  image: {
    width: "100%",
    height: 250,
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: "#121212",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#A9A9A9",
    textAlign: "center",
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#FF6F00",
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 12,
  },
  text: {
    fontSize: 16,
    color: "#A9A9A9",
    marginVertical: 4,
  },
  genreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  genre: {
    backgroundColor: "#333",
    color: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  ratingText: {
    fontSize: 16,
    color: "#A9A9A9",
    marginLeft: 6,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
});
