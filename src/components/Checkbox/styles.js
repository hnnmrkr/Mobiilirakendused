import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        borderColor: colors.grey,
        backgroundColor: colors.orange,
        borderWidth: 1,
        borderRadius: 4,
        minWidth: 30,
        minHeight: 30
    },
    innerContainer: {
        backgroundColor: colors.grey,
        width: '100%',
        height: '15%'
    },
    checkIcon: {
        width: 12,
        height: 9
    }
})