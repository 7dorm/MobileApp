import {StyleSheet} from 'react-native';
import ColorPallet from "./ColorPallet";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorPallet.background,
    },
    tabs: {
        container: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 16,
        },
        element: {
            alignItems: 'center',
            borderBottomWidth: 2,
            padding: 10
        },
        text: {
            fontSize: 14,
            fontFamily: "Inter_400Regular",
        }
    }
})
