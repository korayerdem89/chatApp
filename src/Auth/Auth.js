import React from 'react';
import { ScrollView, View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './Auth.style';
import Input from '../components/Input';
import Button from '../components/Button';
import { Formik } from "formik";
import * as yup from "yup";

const initialFormValues = {
    email: "",
    password: "",
    repassword: "",
};


const Auth = () => {
    const SignupValidationSchema = yup.object().shape({
        email: yup.string().email('Email adresinizi doğru giriniz').required(''),
        password: yup
            .string()
            .min(2, "Çok Kısa!")
            .max(50, "Çok Uzun!")
            .required(""),
        repassword: yup
            .string()
            .oneOf([yup.ref('password')], 'Şifre Eşleşmiyor')
            .required(''),
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
                                        <Input
                                            value={values.repassword}
                                            placeholder={"şifrenizi tekrar giriniz..."}
                                            onType={handleChange("repassword")}
                                            isSecure />
                                        {errors.repassword && (
                                            <Text
                                                style={{
                                                    fontSize: 10,
                                                    color: "red",
                                                    marginVertical: 1,
                                                }}
                                            >
                                                {errors.repassword}
                                            </Text>
                                        )}
                                    </View>
                                    <View style={styles.button_container}>
                                        <Button isSignup text={"Kayıt Ol"} onSelect={handleSubmit}  />
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