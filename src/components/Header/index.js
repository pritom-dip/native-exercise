import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import CommonText from "../common/CommonText";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ backButton, title = "The Planets" }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => {
                    navigation.goBack();
                }}
                style={{ marginRight: spacing[4] }}
            >
                {backButton && <AntDesign name="arrowleft" size={24} color="white" />}
            </Pressable>
            <CommonText variant="h2">{title}</CommonText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: spacing[5],
        borderBottomWidth: 0.2,
        borderBottomColor: colors.white,
        flexDirection: "row",
        alignItems: "center",
    },
});

export default Header;
