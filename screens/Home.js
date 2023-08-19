import React from "react";
import { ImageBackground, View, Text, Pressable, Image } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../assets/Frame226.png')}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: 'space-around', width: '100%', height: '100%' }} >



                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Image style={{ width: 100, height: 100, marginBottom: 50 }} source={require('../assets/WEBINA2.png')} />

                    <Text style={{ color: '#fff', fontSize: 30, fontWeight: 700 }}>Welcome To</Text>
                    <Text style={{ color: '#FFE662', marginTop: 10, fontSize: 50, fontWeight: 700, textTransform: 'uppercase' }}>WebIna Work</Text>
                    <Text style={{ color: '#ffe', marginTop: 10, fontSize: 16, fontWeight: 400, textTransform: 'uppercase' }}>Where work never ends</Text>
                </View>


                <View style={{display : 'flex' ,justifyContent : 'center' , alignItems : 'center' , gap : 20}}>
                    <Pressable
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFE662', width: 200, paddingVertical: 10, borderRadius: 30 }}
                        onPress={() => navigation.navigate("Home2")}
                    >
                        <Text style={{ color: '#1e1e1e', fontSize: 20, fontWeight: 700 }}>GET STARTED</Text>
                    </Pressable>


                    <Pressable
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF', width: 200, paddingVertical: 10, borderRadius: 30 }}
                        onPress={() => navigation.navigate("Home2")}
                    >
                        <Text style={{ color: '#1e1e1e', fontSize: 20, fontWeight: 700 }}>SIGN IN</Text>
                    </Pressable>
                </View>
            </View>

            <Text style={{ padding: 5, color: '#BEBFC5', fontSize: 10 }}>All rights reserved © WEBINA DIGITAL LTD</Text>
        </ImageBackground>
    );
}