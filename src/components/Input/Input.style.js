import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window");
 import colors, { COLORS } from '../../assets/colors';

export default StyleSheet.create({
  container: {
    borderWidth:1,
    flexDirection:"row",
    borderColor:COLORS.dark_orange,
    borderBottomColor:"#FFFFFF",
    marginBottom:20,
    padding:5
  },
 

});
