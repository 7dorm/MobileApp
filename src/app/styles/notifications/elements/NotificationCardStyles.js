import {StyleSheet} from 'react-native';
import ColorPallet from "../../app/ColorPallet";
export default StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 12,
    },
    title: {
        fontSize: 14,
        fontFamily: "Inter_500Medium",
        color: ColorPallet.foreground,
    },
    content: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        width: "80%",
        gap: 6
    },
    money: {
        fontSize: 21,
        fontFamily: "Inter_600SemiBold",
        color: ColorPallet.focus,
    },
    timedate: {
        fontSize: 12,
        fontFamily: "Inter_400Regular",
        color: ColorPallet.dark
    },
    message: {
        flexDirection: "column",
        marginVertical: 6,
    },
    messageText: {
        fontSize: 14,
        fontFamily: "Inter_400Regular",
        color: ColorPallet.shade,
    },
    icon: {
        width: 42,
        height: 42,
        backgroundColor: ColorPallet.colors.fifth,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16
    }
});
