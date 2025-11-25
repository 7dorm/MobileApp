import {Dimensions, StyleSheet} from 'react-native';
import ColorPallet from "../app/ColorPallet";

export default StyleSheet.create({
    container: {
        width: '100%',
        bottom: 0,
        backgroundColor: ColorPallet.background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        zIndex: 1000,
    }
});
