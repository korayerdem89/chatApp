import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Rooms.style';
import RoomContainer from '../../components/RoomContainer/RoomContainer';

const Rooms = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.toggleButton}><Text style={{ fontSize: 40, color: "white" }}>+</Text></TouchableOpacity>
        </View>
    );

};

export default Rooms;