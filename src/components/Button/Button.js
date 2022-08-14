
import React from "react";
import {TouchableOpacity, Text } from "react-native";
import styles from "./Button.style";

function Button({text, isSignup}) {
  return (
<TouchableOpacity style={isSignup ? styles.signup_container : styles.container}>
  <Text style={isSignup ? styles.signup_buttonText : styles.buttonText}>{text}</Text>
</TouchableOpacity>
  );
}
export default Button;
