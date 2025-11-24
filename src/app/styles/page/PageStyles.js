import {StyleSheet} from 'react-native';
import ColorPallet from "../app/ColorPallet";

export const PageStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: ColorPallet.foreground,
        flex: 1,
    }
})
