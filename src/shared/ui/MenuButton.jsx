import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {ButtonStyles} from "../../app/styles/menu/ButtonStyles";
import Icon from "react-native-vector-icons/Ionicons";
import ColorPallet from "../../app/styles/app/ColorPallet";


const { width, height } = Dimensions.get('window');

const BASE_ICON_SIZE = 24; // Default size for a reference screen width
const SCREEN_WIDTH_REFERENCE = 475;

const scaledIconSize = (size) => {
    return size * (width / SCREEN_WIDTH_REFERENCE);
};

export const MenuButton = (props) => {

    return (
        <TouchableOpacity style={ButtonStyles.container} onPress={props.onClick}>
            <Icon
                name={props.icon}
                size={scaledIconSize(BASE_ICON_SIZE)}
                color={props.selected ? ColorPallet.focus : ColorPallet.foreground} />
            <Text
                style={{color: props.selected ? ColorPallet.focus : ColorPallet.foreground} || ButtonStyles.text}>
                {props.label}
            </Text>
        </TouchableOpacity>
    );
}
