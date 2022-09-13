import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window");
import COLORS from "../../assets/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal:10
    },
    toggleButton:{
        backgroundColor:COLORS.medium_orange,
        width:70,
        height:70,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:70,
        position:"absolute",
        bottom:20,
        right:20
    }
});
