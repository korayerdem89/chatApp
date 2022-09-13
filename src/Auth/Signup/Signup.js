import React, {useState} from 'react';
import { ScrollView, View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './Signup.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Formik } from "formik";
import * as yup from "yup";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../config/keys";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "tr";
const db = getDatabase();

const initialFormValues = {
    email: "",
    password: "",
    repassword: "",
};


const Signup = ({navigation}) => {
    const [loading, setLoading] = useState(false);
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
        try {
            setLoading(true);
           createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
           .then(userCredentials => {
            const user = userCredentials.user;
            setLoading(false);
           })
        } catch (error) {
            setLoading(false);
      console.log(error);
        } 
    };

    function navigateGoBack() {
    navigation.goBack();
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
                                        <Button disabled={loading} isSignup text={"Kayıt Ol"} onSelect={handleSubmit}  />
                                        <Button onSelect={navigateGoBack} text={"Geri"} />
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


export default Signup;