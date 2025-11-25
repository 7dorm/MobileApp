import {StyleSheet} from 'react-native';
import ColorPallet from "../app/ColorPallet";

export const SectionStyles = StyleSheet.create({
    listContainer: {
        gap: 24,
        height: "83%",
    },
    day: {
        gap: 4,
    },
    title: {
        fontSize: 16,
        color: ColorPallet.foreground,
        marginBottom: 10,
    },
    text:{
        color: ColorPallet.foreground,
        fontSize: 14,
        fontFamily: "Inter",
        fontWeight: "medium",
    },
    container: {
        borderRadius: 16,
        backgroundColor: ColorPallet.colors.fifth,
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
    },
    image: {
        borderRadius: 12,
        width: 36,
        height: 36,
        resizeMode: "stretch",
        marginRight: 12,
    },
    profileContainer: {
        gap: 4
    },
    typeContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    moneyContainer: {
        alignItems: "flex-end",
        gap: 4
    },
    bottomText: {
        color: ColorPallet.shade,
        fontSize: 14,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});
