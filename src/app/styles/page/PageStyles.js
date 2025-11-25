import {StyleSheet} from 'react-native';
import ColorPallet from "../app/ColorPallet";

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: ColorPallet.background,
        flex: 1,
    }
})
