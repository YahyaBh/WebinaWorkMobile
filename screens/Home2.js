import React from "react";
import { ImageBackground, Pressable, View, Text, Image } from "react-native";

export default function HomeScreen2({ navigation }) {

    


        return(
            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../assets/Frame226.png')}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: 'space-around', width: '100%', height: '100%' }} >
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 700 }}>Work From</Text>
                        <Text style={{ color: '#FFE662', marginTop: 10, fontSize: 50, fontWeight: 700, textTransform: 'uppercase' }}>ANYWHERE</Text>
                    </View>

                    <View style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                        <Image source={require('../assets/16736617_5802647.png')} style={{ height: 200, width: 300 }} />
                        <Text style={{ color: '#fff' , fontSize : 20 , fontWeight : 600, textAlign : 'center' }}>No matter where you are , you can still work with us</Text>
                    </View>

                    <Pressable
                        style={{ backgroundColor: '#FFE662', paddingHorizontal: 30, paddingVertical: 5, borderRadius: 30 }}
                        onPress={() => navigation.navigate("Home3")}
                    >
                        <Text style={{ color: '#1e1e1e', fontSize: 30, fontWeight: 700 }}>NEXT</Text>
                    </Pressable>
                </View>

                <Text style={{ padding: 5, color: '#BEBFC5', fontSize: 10 }}>All rights reserved © WEBINA DIGITAL LTD</Text>
            </ImageBackground>
        );
}