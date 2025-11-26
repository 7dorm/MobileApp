import {StyleSheet} from 'react-native';
import ColorPallet from "../../app/ColorPallet";
export default StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderColor: ColorPallet.colors.fifth,
    },
    title: {
        paddingTop: 16,
        fontSize: 12,
        fontFamily: "Inter_600SemiBold",
        color: ColorPallet.shade,
    },
    elements: {
        marginVertical: 16,
        justifyContent: "space-between",
        gap: 24
    }
});
