import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { StatusBar } from "react-native-web";
import DetailsScreen from "./src/screens/DetailsScreen";

export default function App() {
    const [loaded] = useFonts({
        "Antonio-Medium": require("./assets/fonts/AntonioMedium.ttf"),
        "Spartan-Regular": require("./assets/fonts/SpartanRegular.ttf"),
        "Spartan-Bold": require("./assets/fonts/SpartanBold.ttf"),
    });

    const Stack = createNativeStackNavigator();

    if (!loaded) {
        return null;
    }

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Details" component={DetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
