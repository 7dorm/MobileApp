import {Dimensions, StyleSheet} from 'react-native';
import ColorPallet from "../../../app/ColorPallet";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
    container: {
        width: width * 0.378,
        height: height * 0.135,
        padding: 12,
        justifyContent: "space-between",
    },
    text: {
        fontSize: 18,
        color: ColorPallet.foreground,
        fontFamily: 'Inter_500Medium',
    },
    addContainer: {
        borderRadius: 16,
        backgroundColor: ColorPallet.colors.fifth,
        width: width * 0.12,
        height: height * 0.135,
        alignItems: "center",
        justifyContent: "center",
    },
    lowerText: {
        fontSize: 14,
        color: ColorPallet.foreground,
        fontFamily: 'Inter_500Medium',
    },
    bottomTextContainer: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    }
})
