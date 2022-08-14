import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window");
import COLORS from '../assets/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.dark_orange,
    },
});
