import { Text, StyleSheet } from "react-native";
import { presets } from "./text.preset";

const CommonText = ({ children, variant = "default", style }) => {
    const textStyles = StyleSheet.compose(presets[variant], style);

    return <Text style={textStyles}>{children}</Text>;
};

export default CommonText;
