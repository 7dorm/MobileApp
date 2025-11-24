import {Touchable, View} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export const Header = () => {
    return (
        <View>
            <Touchable>
                <Icon name='menu' size={30} color="#fff" />
            </Touchable>
        </View>
    );
};
