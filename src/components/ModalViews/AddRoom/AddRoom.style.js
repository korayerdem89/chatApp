import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window");
import COLORS from "../../../assets/colors";

export default StyleSheet.create({
  container: {
   width: deviceSize.width / 2.2,
   height: deviceSize.height / 3.5,
   alignItems:"center",
   justifyContent:"center",
   paddingHorizontal:10,
   paddingVertical:20,
   borderWidth:1,
   borderColor:"#e6e6e6",
   margin:10
  },
  text:{
    color: COLORS.medium_orange
  },
  roomInput: {
    borderWidth:1,
    backgroundColor:"white",
    width: deviceSize.width / 2,
    padding:5,
    alignItems:"center",
    justifyContent:"center",
    borderColor:"gray",
    borderRadius:3,
    color:"gray",
    marginBottom:10
  }
});
