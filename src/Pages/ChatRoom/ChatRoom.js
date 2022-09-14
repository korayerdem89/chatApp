import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import styles from './ChatRoom.style';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../config/keys";
import { getDatabase, ref, push, onValue, remove } from "firebase/database";
import { getAuth } from "firebase/auth";

 

const ChatRoom = () => {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    );

};

export default ChatRoom;