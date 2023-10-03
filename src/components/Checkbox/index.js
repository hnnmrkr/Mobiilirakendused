import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Checkbox = ({checked, onCheck}) => {
    return (
        <View style={styles.container}> 
        <TouchableOpacity activeOpacity={0.6} >
            <Text>test</Text>
        </TouchableOpacity>
        </View>
    )
}

export default Checkbox