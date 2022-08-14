
import React from "react";
import {View, TextInput } from "react-native";
import styles from "./Input.style";

function Input({placeholder}) {
  return (
    <View style={styles.container} >
      <TextInput 
      placeholder={placeholder}
      placeholderTextColor= "#FFFFFF"
    //   value={value}
    //   onChangeText={onType}  
    //   keyboardType={type}
    //   secureTextEntry={isSecure}
      />
 
    </View>
  );
}
export default Input;