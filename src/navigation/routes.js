import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import MovieDetailScreen from "../screens/movieDetailsScreen/MovieDetailsScreen";

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MovieDetail" component={MovieDetailScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default Routes;
