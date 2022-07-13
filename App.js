import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./src/theme/colors";
import { spacing } from "./src/theme/spacing";
import { useFonts } from "expo-font";
import { typography } from "./src/theme/typography";

export default function App() {
    const [loaded] = useFonts({
        "Antonio-Medium": require("./assets/fonts/AntonioMedium.ttf"),
        "Spartan-Regular": require("./assets/fonts/SpartanRegular.ttf"),
        "Spartan-Bold": require("./assets/fonts/SpartanBold.ttf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: spacing[5], fontFamily: typography.bold }}>This is a text</Text>
            <Text style={{ marginTop: spacing[4] }}>Hello World</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blue,
        alignItems: "center",
        justifyContent: "center",
    },
});
