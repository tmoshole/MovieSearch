import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/store/redux";
import HomeScreen from "./src/screens/homeScreen/HomeScreen";
import MovieDetailScreen from "./src/screens/MovieDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }}/>
          <Stack.Screen name="MovieDetail" component={MovieDetailScreen}  options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

