
import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./AddRoom.style";
import Modal from "react-native-modal";
function AddRoom() {
    return (
        <View>
          <Modal>
            <View style={{ flex: 1 }}>
              <TextInput 
              placeHolder="Oda İsmi Giriniz"
              />
            </View>
          </Modal>
        </View>
      );
}
export default AddRoom;
