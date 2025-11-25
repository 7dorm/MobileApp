import { StyleSheet } from 'react-native';
import ColorPallet from "../app/ColorPallet";

export default StyleSheet.create({
    container: {
        backgroundColor: ColorPallet.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
        color: ColorPallet.foreground,
        fontFamily: 'Inter_500Medium',
    }
});
