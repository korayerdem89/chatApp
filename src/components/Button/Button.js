
import React from "react";
import {TouchableOpacity, Text } from "react-native";
import styles from "./Button.style";

function Button({text, isSignup, onSelect, disabled}) {
  return (
<TouchableOpacity disabled={disabled} onPress={onSelect} style={isSignup ? styles.signup_container : styles.container}>
  <Text style={isSignup ? styles.signup_buttonText : styles.buttonText}>{text}</Text>
</TouchableOpacity>
  );
}
export default Button;
