import React from 'react';
import { ScrollView, View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './Auth.style';
import Input from '../components/Input';
import Button from '../components/Button';
import { Formik } from "formik";
import * as yup from "yup";

const initialFormValues = {
    username: "",
    password: "",
    repassword: "",
};

function handleSubmit() {
null
};

const Auth = () => {
    const SignupValidationSchema = yup.object().shape({
        username: yup
            .string()
            .min(2, "Çok Kısa!")
            .max(50, "Çok Uzun!")
            .required(" "),
    });
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={-300}
        >
            <ScrollView style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <>
                        <Text style={styles.header}>Chat App</Text>
                        <Formik
            initialValues={initialFormValues}
            onSubmit={handleSubmit}
            validationSchema={SignupValidationSchema}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              errors,
              isValid,
              dirty,
            }) => (
                        <View style={styles.form_container}>
                            <View style={styles.input_container}>
                                <Input placeholder={"e-postanızı giriniz.."} />
                                <Input placeholder={"şifrenizi giriniz..."} />
                                <Input placeholder={"şifrenizi tekrar giriniz..."} />
                            </View>
                            <View style={styles.button_container}>
                                <Button isSignup text={"Kayıt Ol"} />
                                <Button text={"Geri"} />
                            </View>
                        </View> 
                         )}
                        </Formik>
                    </>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};


export default Auth;