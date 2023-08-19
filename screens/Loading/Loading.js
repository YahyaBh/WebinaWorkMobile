import React from "react";
import { View, Image } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ backgroundColor: '#1e1e1e', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../assets/WEBINA2.png')} style={{ width: 100, height: 100 }} />
        </View>
    );
}