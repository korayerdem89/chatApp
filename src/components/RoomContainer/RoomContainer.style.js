import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window");
import COLORS from "../../assets/colors";

export default StyleSheet.create({
  container: {
   width: deviceSize.width / 2.5,
   height: deviceSize.height / 4,
   alignItems:"center",
   justifyContent:"center",
   borderWidth:1,
   borderColor:"#e6e6e6",
   marginHorizontal:10,
   borderRadius:10
  },
  text:{
    color: COLORS.medium_orange,
    fontSize:20
  }
});
