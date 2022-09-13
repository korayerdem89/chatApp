import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import styles from './Rooms.style';
import RoomContainer from '../../components/RoomContainer/RoomContainer';
import AddRoom from '../../components/ModalViews/AddRoom';
const Rooms = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [roomName, setRoomName] = useState("");
    const [roomItems, setRoomItems] = useState([]);

    const handleAddRoom = () => {
        if (roomItems.indexOf(roomName) > -1) {
            return Alert.alert('Bu isimde oda zaten mevcut');
        } 
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