import axios from "axios";
import React, { useState, useEffect } from "react";
import { ImageBackground, View, Text, Pressable, Image, TextInput, Alert } from "react-native";

export default function SignUp({ navigation }) {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confrimPassword, setConfirmPassword] = useState();




    const handlesignup = () => {

        if (password === confrimPassword) {
            Alert.alert('Warning !', 'Please check all your informations before procceding', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Coninue', onPress: () =>
                        axios.post('http://localhost:8000/mobile/signup', { username: username, password: password, email: email, confrimPassword: confrimPassword })
                            .then((res) => {
                                console.log(res);
                            })
                            .catch((err) => {
                                console.log('Worng ' , err);
                            })
                },
            ]);
        } else {
            Alert.alert('Error' , 'Password does not match Password Confirmation');
        }
    }


    return (
        <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../assets/Frame226.png')}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', width: '100%', height: '100%', gap: 30 }} >



                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Image style={{ width: 100, height: 100, marginBottom: 50 }} source={require('../assets/WEBINA2.png')} />

                    <Text style={{ color: '#fff', fontSize: 30, fontWeight: 700 }}>Welcome To</Text>
                    <Text style={{ color: '#FFE662', marginTop: 10, fontSize: 50, fontWeight: 700, textTransform: 'uppercase' }}>WebIna Work</Text>
                    <Text style={{ color: '#ffe', marginTop: 10, fontSize: 16, fontWeight: 400, textTransform: 'uppercase' }}>Where work never ends</Text>
                </View>


                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20 }}>

                        <TextInput onChange={e => setUsername(e)} style={{ backgroundColor: '#fff', width: 250, height: 40, borderRadius: 20, padding: 10 }} placeholder="User name" />

                        <TextInput keyboardType="email-address" onChange={e => setEmail(e)} style={{ backgroundColor: '#fff', width: 250, height: 40, borderRadius: 20, padding: 10 }} placeholder="example@email.com" />

                        <TextInput secureTextEntry={true} onChange={e => setPassword(e)} style={{ backgroundColor: '#fff', width: 250, height: 40, borderRadius: 20, padding: 10 }} placeholder="Password" />

                        <TextInput secureTextEntry={true} onChange={e => setConfirmPassword(e)} style={{ backgroundColor: '#fff', width: 250, height: 40, borderRadius: 20, padding: 10 }} placeholder="Confirm password" />

                    </View>

                    <Pressable
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF', width: 200, paddingVertical: 10, borderRadius: 30 }}
                        onPress={handlesignup}
                    >
                        <Text style={{ color: '#1e1e1e', fontSize: 20, fontWeight: 700 }}>SIGN UP</Text>
                    </Pressable>
                </View>
            </View>

            <Text style={{ padding: 5, color: '#BEBFC5', fontSize: 10 }}>All rights reserved © WEBINA DIGITAL LTD</Text>
        </ImageBackground>
    );
}