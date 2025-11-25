import {Dimensions, StyleSheet} from 'react-native';
import ColorPallet from "../../app/ColorPallet";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default StyleSheet.create({
    container: {
        height: height * 0.135,
        backgroundColor: ColorPallet.background,
        width: width,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 8,
        marginBottom: 24,
    },
    contentContainer: {
        paddingHorizontal: 16,
        gap: 10
    }

})
