import React from 'react';
import { ScrollView, View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Formik } from "formik";
import * as yup from "yup";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

const initialFormValues = {
    email: "",
    password: "",
};


const Login = () => {
    const SignupValidationSchema = yup.object().shape({
        email: yup.string().email('Email adresinizi doğru giriniz').required(''),
        password: yup
            .string()
            .min(2, "Çok Kısa!")
            .max(50, "Çok Uzun!")
            .required(""),
    });

    const handleSubmit = (formValues) => {
        console.log(formValues.email);
    };

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
                                        <Button isSignup text={"Giriş Yap"} onSelect={handleSubmit} />
                                        <Button text={"Geri"} />
                                    </View>
                                    <View style={styles.signup_section}>
                                    <Text style={styles.signupText}>Üye değil misiniz ?</Text>
                                    <Text style={styles.signupLink}>Üye ol</Text>
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