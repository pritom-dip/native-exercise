import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { colors } from "./src/theme/colors";
import { spacing } from "./src/theme/spacing";
import { useFonts } from "expo-font";
import { typography } from "./src/theme/typography";
import CommonText from "./src/components/common/CommonText";

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
            <CommonText variant="h1">This is a text</CommonText>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        alignItems: "center",
        justifyContent: "center",
    },
});
