import React from 'react';
import { ScrollView, View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Formik } from "formik";
import * as yup from "yup";
import {
    getAuth,
    signInWithCredential,
  } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../config/keys";
 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "tr";

const initialFormValues = {
    email: "",
    password: "",
};


const Login = ({navigation}) => {
    const SignupValidationSchema = yup.object().shape({
        email: yup.string().email('Email adresinizi doğru giriniz').required(''),
        password: yup
            .string()
            .min(2, "Çok Kısa!")
            .max(50, "Çok Uzun!")
            .required(""),
    });

    const handleLogin = (formValues) => {
        console.log(formValues.email);
    };
const NavigateToSignup = () => {
    navigation.navigate("Signup");
}
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={-800}
        >
            <ScrollView style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <>
                        <Text style={styles.header}>Chat App</Text>
                        <Formik
                            initialValues={initialFormValues}
                            onSubmit={handleLogin}
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
                                        <Input
                                            value={values.email}
                                            placeholder={"e-postanızı giriniz.."}
                                            onType={handleChange("email")} />
                                        {errors.email && (
                                            <Text
                                                style={{
                                                    fontSize: 10,
                                                    color: "red",
                                                    marginVertical: 1,
                                                }}
                                            >
                                                {errors.email}
                                            </Text>
                                        )}
                                        <Input
                                            value={values.password}
                                            placeholder={"şifrenizi giriniz..."}
                                            onType={handleChange("password")}
                                            isSecure />
                                        {errors.password && (
                                            <Text
                                                style={{
                                                    fontSize: 10,
                                                    color: "red",
                                                    marginVertical: 1,
                                                }}
                                            >
                                                {errors.password}
                                            </Text>
                                        )}
                                    </View>
                                    <View style={styles.button_container}>
                                        <Button text={"Giriş Yap"} onSelect={handleSubmit} />
                                    </View>
                                    <View style={styles.signup_section}>
                                        <Text style={styles.signupText}>Üye değil misiniz ?</Text>
                                        <TouchableOpacity onPress={NavigateToSignup}>
                                            <Text style={styles.signupLink}>Üye ol</Text>
                                        </TouchableOpacity>
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


export default Login;