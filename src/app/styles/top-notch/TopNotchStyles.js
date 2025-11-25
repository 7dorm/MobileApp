import {StyleSheet} from "react-native";
import ColorPallet from "../app/ColorPallet";

export const TopNotchStyles = StyleSheet.create({
    container: {
        backgroundColor: ColorPallet.background,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        width: '100%',
        padding: 10,
        zIndex: 1000
    },
    profileButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    actionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25,
        paddingHorizontal: 12,
    },
    icon: {
        backgroundColor: ColorPallet.colors.fifth,
        color: ColorPallet.foreground
    },
    text: {
        fontSize: 16,
        fontFamily: 'Inter',
        fontWeight: 'medium',
        color: ColorPallet.foreground,
    }
});
