import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import styles from './Rooms.style';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../config/keys";
import RoomContainer from '../../components/RoomContainer/RoomContainer';
import parsedData from '../../utils/parsedData';
import AddRoom from '../../components/ModalViews/AddRoom';
import { getDatabase, ref, push, onValue, remove } from "firebase/database";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "tr";
const db = getDatabase();

const Rooms = ({navigation}) => {
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
    const navigateToChatRoom = (room) => {
        navigation.navigate("ChatRoom", { name: room })
    };
    useEffect(() => {
        const roomsData = ref(db, 'Rooms/');
        onValue(roomsData, (snapshot) => {
            const contentData = snapshot.val();
            const parsedContentData = parsedData(contentData);
            setRoomItems(parsedContentData);
        });
    }, [roomName])
  
    const removeItem = (item, index) => {
        let itemsCopy = [...roomItems];
        const reference = ref(
            db,
            `Rooms/${item.id}`
        );
        remove(reference);
        itemsCopy.splice(index, 1);
        setRoomItems(itemsCopy);
        console.log(index);
    }
    const renderRoomItems = ({ item, index }) => {
        return (
            <ScrollView style={{ height: 200 }}>
                <View>
                    <RoomContainer onSelect = {() => navigateToChatRoom(item.roomName)} onLongSelect={() => removeItem(item, index)} text={item.roomName} />
                </View>
            </ScrollView>
        )
    };

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                data={roomItems}
                keyExtractor={(item, _index) => item.id}
                renderItem={renderRoomItems}
                style={{ marginTop: 20, flex: 1 }}
            />
            <View style={{ flex: 0.25 }}>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.toggleButton}>
                    <Text style={{ fontSize: 40, color: "white" }}>+</Text>
                </TouchableOpacity>
            </View>

            <AddRoom onSelect={handleAddRoom} onChangeText={(text) => setRoomName(text)} visible={isModalVisible} onBackdropPress={() => setModalVisible(false)} onSwipeMove={() => setModalVisible(false)} />
        </View>
    );

};

export default Rooms;