import React from "react";
import { Pressable, Image, Text, View } from "react-native"
import { styles } from "./styles";

const AuthHeader = ({title, onBackPress}) => {
    return (
        <View>
            <Pressable onPress={onBackPress}>
                <Image source={require('../../assets/icon.png')}/>
            </Pressable>
            <Text>{title}</Text>
        </View>
    )
}

export default AuthHeader