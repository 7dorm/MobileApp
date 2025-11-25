import {Pressable, TouchableOpacity, Text, View} from 'react-native';
import {TopNotchStyles} from "../../app/styles/top-notch/TopNotchStyles";
import ColorPallet from "../../app/styles/app/ColorPallet";
import { Avatar } from '@rneui/themed';
import Icon from "react-native-vector-icons/Ionicons";

export default function TopNotch(props) {
    return (
        <View style={TopNotchStyles.container}>
            <TouchableOpacity style={TopNotchStyles.profileButton}>
                <Avatar
                    size={36}
                    rounded
                    icon={{ name: "person", type: "ionicon" }}
                    containerStyle={TopNotchStyles.icon}
                />
                <Text style={TopNotchStyles.text}>Charlotte ></Text>
            </TouchableOpacity>
            <View style={TopNotchStyles.actionsContainer}>
                <TouchableOpacity>
                    <Icon style={TopNotchStyles.icon} name="notifications" size={25}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon style={TopNotchStyles.icon} name="qr-code" size={25}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}
