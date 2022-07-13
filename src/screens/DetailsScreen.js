import { SafeAreaView, StyleSheet } from "react-native";
import CommonText from "../components/common/CommonText";
import Header from "../components/Header";
import { colors } from "../theme/colors";

const DetailsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header backButton={true} title="Single Planet Details" />
            <CommonText>sdfsdfs</CommonText>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
        color: colors.white,
    },
});

export default DetailsScreen;
