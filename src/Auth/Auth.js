import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './Auth.style';
import Input from '../components/Input';

const Auth = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>chatApp</Text>
            <Input />
            <Input />
            <Input />
        </View>
    );
};


export default Auth;