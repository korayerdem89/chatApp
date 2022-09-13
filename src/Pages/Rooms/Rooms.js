import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './Rooms.style';
import RoomContainer from '../../components/RoomContainer/RoomContainer';

const Rooms = () => {

    return (
        <View style={styles.container}>
           <RoomContainer />
        </View>
    );

};

export default Rooms;