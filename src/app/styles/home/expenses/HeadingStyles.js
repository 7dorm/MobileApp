import {StyleSheet} from 'react-native';
import ColorPallet from "../../app/ColorPallet";

export default StyleSheet.create({
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
        fontFamily: 'Inter_500Medium',
    },
    month: {
        fontSize: 21,
        color: ColorPallet.focus,
        fontFamily: 'Inter_500Medium',
    },
    money: {
        fontSize: 18,
        color: ColorPallet.shade,
        fontFamily: 'Inter_500Medium',
    }
})
