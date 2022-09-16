import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window");
import COLORS from "../../../assets/colors";

export default StyleSheet.create({
  container: {
    flex:1,
   width: deviceSize.width / 2.2,
   alignItems:"center",
   justifyContent:"flex-end",
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
    borderRadius:5,
    backgroundColor:"white",
    width: deviceSize.width / 1.5,
    height:150,
    padding:15,
    alignItems:"center",
    justifyContent:"center",
    borderColor:"gray",
    borderRadius:3,
    color:"gray",
    marginBottom:10
  }
});
