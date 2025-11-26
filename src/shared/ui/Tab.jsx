import {Text, TouchableOpacity} from "react-native";
import AppStyles from "../../app/styles/app/AppStyles";
import ColorPallet from "../../app/styles/app/ColorPallet";

export const Tab = ({text, selected, onPress}) => {
    return (
        <TouchableOpacity
            style={[
                AppStyles.tabs.element,
                {borderBottomColor: selected ? ColorPallet.focus : ColorPallet.background}
            ]}
            onPress={onPress}
        >
            <Text style={[
                AppStyles.tabs.text,
                {color: selected ? ColorPallet.focus : ColorPallet.foreground}
            ]}>
                {text}
            </Text>

        </TouchableOpacity>
    );
}
