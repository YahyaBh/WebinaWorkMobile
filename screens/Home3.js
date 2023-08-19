import React from "react";
import { ImageBackground, Pressable, View, Text, Image } from "react-native";

export default function HomeScreen3({ navigation }) {


        return(
            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../assets/Frame226.png')}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: 'space-around', width: '100%', height: '100%' }} >
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 700 }}>Work At</Text>
                        <Text style={{ color: '#FFE662', marginTop: 10, fontSize: 50, fontWeight: 700, textTransform: 'uppercase' }}>ANYTIME</Text>
                    </View>

                    <View style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                        <Image source={require('../assets/11906892_4867781.png')} style={{ height: 230, width: 270 }} />
                        <Text style={{ color: '#fff' , fontSize : 20 , fontWeight : 600, textAlign : 'center'}}>Flexible working hours , no need to be worried about timeline</Text>
                    </View>

                    <Pressable
                        style={{ backgroundColor: '#FFE662', paddingHorizontal: 30, paddingVertical: 5, borderRadius: 30 }}
                        onPress={() => navigation.navigate("Home4")}
                    >
                        <Text style={{ color: '#1e1e1e', fontSize: 30, fontWeight: 700 }}>NEXT</Text>
                    </Pressable>
                </View>

                <Text style={{ padding: 5, color: '#BEBFC5', fontSize: 10 }}>All rights reserved © WEBINA DIGITAL LTD</Text>
            </ImageBackground>
        );
}