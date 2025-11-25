import {Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';
import ColorPallet from "../../app/styles/app/ColorPallet";

const { width, height } = Dimensions.get('window');

const BASE_ICON_SIZE = 24; // Default size for a reference screen width
const SCREEN_WIDTH_REFERENCE = 400;

const scaledIconSize = (size) => {
    return size * (width / SCREEN_WIDTH_REFERENCE);
};

export const Button = (props) => {
    const IconComponent = props.icon;
    return (
        <TouchableOpacity style={props.style.element} onPress={props.onClick}>
            <IconComponent width={scaledIconSize(BASE_ICON_SIZE)} height={scaledIconSize(BASE_ICON_SIZE)} />
            <Text
                style={[{color: ColorPallet.foreground}, props.style.text]}>
                {props.label}
            </Text>
        </TouchableOpacity>
    );
}
