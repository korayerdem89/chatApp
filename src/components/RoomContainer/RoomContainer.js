
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./RoomContainer.style";

function RoomContainer({text, onLongSelect}) {
    return (
        <TouchableOpacity onLongPress={onLongSelect} style={styles.container} >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}
export default RoomContainer;
