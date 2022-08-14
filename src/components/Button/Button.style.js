import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window");
import COLORS  from '../../assets/colors';

export default StyleSheet.create({
  container: {
    backgroundColor:"white",
    marginBottom: 10,
    padding: 5,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5,
  },
  signup_container: {
    backgroundColor:"rgba(255,255,255,0.4)",
    marginBottom: 10,
    padding: 5,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5,
  },
  buttonText:{
  fontSize:15,
  color:COLORS.light_orange,
  fontWeight:"600"
  },
  signup_buttonText:{
  fontSize:15,
  color:"white",
  fontWeight:"600"
  }
});
