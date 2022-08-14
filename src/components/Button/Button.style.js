import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window");
import COLORS  from '../../assets/colors';

export default StyleSheet.create({
  container: {
    backgroundColor:"white",
    borderWidth: 1,
    flexDirection: "row",
    borderColor: COLORS.dark_orange,
    borderBottomColor: "#FFFFFF",
    marginBottom: 20,
    padding: 5,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5,
  },
  buttonText:{
  fontSize:15,
  color:COLORS.light_orange,
  fontWeight:"600"
  }
});
