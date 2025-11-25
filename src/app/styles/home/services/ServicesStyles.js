import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    element: {
        alignItems: 'center',
        justifyContent: "center",
        gap: 8,
        width: 64,
        height: 64,
    },
    text: {
        fontSize: 14,
        fontFamily: 'Inter_500Medium',
    }
})
