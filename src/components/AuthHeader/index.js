import React from "react";
import { Pressable, Image, Text, View } from "react-native"
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const AuthHeader = ({title, onBackPress}) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Pressable hitSlop={20} onPress={() => navigation.goBack()}>
                <Image source={require('../../assets/icon.png')}/>
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default React.memo(AuthHeader)