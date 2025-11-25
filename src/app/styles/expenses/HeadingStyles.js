import {StyleSheet} from 'react-native';
import ColorPallet from "../app/ColorPallet";

export const HeadingStyles = StyleSheet.create({
    container: {
        gap: 15
    },
    bars: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        alignSelf: 'center',
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    textWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 21,
        color: ColorPallet.foreground,
        fontWeight: 'medium',
        fontFamily: 'Inter',
    },
    month: {
        fontSize: 21,
        color: ColorPallet.focus,
        fontWeight: 'medium',
        fontFamily: 'Inter',
    },
    money: {
        fontSize: 18,
        color: ColorPallet.shade,
        fontWeight: 'medium',
        fontFamily: 'Inter',
    }
})
