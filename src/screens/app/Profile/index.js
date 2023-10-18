import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

const Profile = () => {
    return (
        <SafeAreaView>
            <View style={styles.container} />
            <Text>Profile</Text>
        </SafeAreaView>
    )
}

export default React.memo(Profile)