import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import styles from './Rooms.style';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../config/keys";
import RoomContainer from '../../components/RoomContainer/RoomContainer';
import AddRoom from '../../components/ModalViews/AddRoom';
import { getDatabase, ref, onValue, push } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "tr";
const db = getDatabase();

const Rooms = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [roomName, setRoomName] = useState("");
    const [roomItems, setRoomItems] = useState([]);

    const handleAddRoom = async () => {
        if (roomItems.indexOf(roomName) > -1) {
            return Alert.alert('Bu isimde oda zaten mevcut');
        } 
        const reference = await ref(db, `Rooms`);
        push(reference, {
          roomName
        });
        setRoomItems([...roomItems, roomName]);
        setRoomName("");
        setModalVisible(false);
    };

 
    
    console.log(roomItems);
  const removeItem = (index) => {
    let itemsCopy = [...roomItems];
    itemsCopy.splice(index, 1);
    setRoomItems(itemsCopy);
    console.log(index);
  }
      const renderRoomItems = ({item, index}) => {
        return (
            <ScrollView style={{height:200}}>
               <View>
                <RoomContainer onLongSelect={() => removeItem(index)} text={item} />
               </View>
            </ScrollView>
        )
    };
console.log(roomItems);
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                data={roomItems}
                keyExtractor={(item, index) => index}
                renderItem={ renderRoomItems }
                style={{marginTop:20, flex:1}}
            />
            <View style={{flex:0.25}}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.toggleButton}>
                <Text style={{ fontSize: 40, color: "white" }}>+</Text>
            </TouchableOpacity>
            </View>

            <AddRoom onSelect={handleAddRoom} onChangeText={(text) => setRoomName(text)} visible={isModalVisible} onBackdropPress={() => setModalVisible(false)} onSwipeMove={() => setModalVisible(false)} />
        </View>
    );

};

export default Rooms;