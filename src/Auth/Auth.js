import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './Auth.style';
import Input from '../components/Input';
import Button from '../components/Button';
const Auth = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Chat App</Text>
            <View style={styles.input_container}>
            <Input  placeholder={"e-postanızı giriniz.."} />
            <Input placeholder={"şifrenizi giriniz..."} />
            <Input placeholder={"şifrenizi tekrar giriniz..."} />
            </View>
        <View style={styles.button_container}>
         <Button isSignup text={"Kayıt Ol"} />
         <Button text= {"Geri"}/>
        </View>
        </View>
    );
};


export default Auth;