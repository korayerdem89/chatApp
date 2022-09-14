import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import styles from './ChatRoom.style';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../config/keys";
import { getDatabase, ref, push, onValue, remove } from "firebase/database";
import { getAuth } from "firebase/auth";

 

const ChatRoom = ({route}) => {
    const room = route.params.name;
    console.log(room);
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Oda kuruldu!</Text>
            <Text style={{flex:1}}>{room}</Text>
            <View>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.toggleButton}>
                    <Text style={{ fontSize: 40, color: "white" }}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

};

export default ChatRoom;