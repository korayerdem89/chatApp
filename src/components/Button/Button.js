
import React from "react";
import {TouchableOpacity, Text } from "react-native";
import styles from "./Button.style";

function Button({placeholder}) {
  return (
<TouchableOpacity style={styles.container}>
  <Text style={styles.buttonText}>Hello</Text>
</TouchableOpacity>
  );
}
export default Button;
