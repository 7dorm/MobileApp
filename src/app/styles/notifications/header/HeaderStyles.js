import {Dimensions, StyleSheet} from "react-native";
import ColorPallet from "../../app/ColorPallet";

const height = Dimensions.get("window").height;

export default StyleSheet.create({
    container: {
        width: '100%',
        height: height * 0.07,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: ColorPallet.background,
        padding: 16,
    },
    button: {
        backgroundColor: ColorPallet.background,
        width: 24,
        height: 24,
    },
    buttonText: {
        color: ColorPallet.foreground,
        fontSize: 21,
    }
});
