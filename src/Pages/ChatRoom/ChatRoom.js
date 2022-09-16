import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import AddText from '../../components/ModalViews/AddText/AddText';
import styles from './ChatRoom.style';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../config/keys";
import { getDatabase, ref, push, onValue, remove } from "firebase/database";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "tr";
const db = getDatabase();


const ChatRoom = ({route}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [message, setMessage ] = useState("");
    const [allMessages, setAllMessages ] = useState([]);
    const {name:room, idNumber:id} = route.params;

    const handleAddMessage = async () => {
        const reference = await ref(db, `Rooms/${id}/roomName`);
        push(reference, {
        message
        });
        setAllMessages([...allMessages, message]);
        setMessage("");
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Oda kuruldu!</Text>
            <View>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.toggleButton}>
                    <Text style={{ fontSize: 40, color: "white" }}>+</Text>
                </TouchableOpacity>
            </View>
            <AddText onSelect={handleAddMessage} onChangeText={(text) => setMessage(text)} visible={isModalVisible} onBackdropPress={() => setModalVisible(false)} onSwipeMove={() => setModalVisible(false)} />
        </View>
    );

};

export default ChatRoom;