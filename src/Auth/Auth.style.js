import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window");
import COLORS from '../assets/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.dark_orange,
        paddingHorizontal:10
    },
    header:{
        height:deviceSize.height*0.5,
        paddingTop:deviceSize.height*0.25,
        alignSelf:"center",
        fontSize:25,
        color:"white",
    }
});
