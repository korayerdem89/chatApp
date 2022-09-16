
import React from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import styles from "./AddText.style";
import Modal from "react-native-modal";
import Button from "../../Button/Button";
const deviceSize = Dimensions.get('window');

function AddText({ visible, onBackdropPress, onSwipeMove, onChangeText, onSelect }) {
  return (
    <View >
      <Modal avoidKeyboard={true} style={{alignItems:"center"}} onBackdropPress={onBackdropPress} isVisible={visible} onSwipeMove={onSwipeMove}>
        <View style={{alignItems:"center", paddingVertical:30, backgroundColor:"white", borderRadius:10, width: deviceSize.width / 1.3}}>
          <TextInput
            style={styles.roomInput}
            placeholder="Mesajınızı Giriniz..."
            placeholderTextColor="#a0a0a0"
            multiline={true}
            onChangeText={onChangeText}
          />
       <Button text={"Oluştur"} onSelect={onSelect} />
        </View>
      </Modal>
    </View>
  );
}
export default AddText;
