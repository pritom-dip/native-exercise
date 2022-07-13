import { SafeAreaView, StatusBar, StyleSheet, View, FlatList, Pressable } from "react-native";
import CommonText from "../components/common/CommonText";
import Header from "../components/Header";
import { PLANET_LIST } from "../data/data";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />

            <FlatList
                data={PLANET_LIST}
                contentContainerStyle={styles.list}
                keyExtractor={item => item.name}
                renderItem={({ item }) => {
                    return (
                        <Pressable
                            onPress={() => {
                                navigation.navigate("Details", { planet: item });
                            }}
                            style={styles.item}
                        >
                            <View style={styles.itemInformation}>
                                <View style={[styles.circle, { backgroundColor: item.color }]}></View>
                                <CommonText style={styles.itemName} variant="h4">
                                    {item.name}
                                </CommonText>
                            </View>
                            <View>
                                <AntDesign name="right" size={12} color="white" />
                            </View>
                        </Pressable>
                    );
                }}
                ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
            />

            <StatusBar style="light" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
        color: colors.white,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,

        alignItems: "center",
        flex: 1,
    },
    itemInformation: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        color: "red",
    },
    itemName: {
        textTransform: "uppercase",
        marginLeft: spacing[4],
    },
    seperator: {
        borderBottomColor: colors.white,
        borderBottomWidth: 0.2,
    },
    list: {
        padding: spacing[5],
    },
});

export default HomeScreen;
