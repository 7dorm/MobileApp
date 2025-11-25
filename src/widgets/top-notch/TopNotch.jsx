import {Pressable, TouchableOpacity, Text, View} from 'react-native';
import TopNotchStyles from "../../app/styles/home/top-notch/TopNotchStyles";
import ColorPallet from "../../app/styles/app/ColorPallet";
import {Avatar} from '@rneui/themed';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

export default function TopNotch(props) {
    const navigation = useNavigation();
    return (
        <View style={TopNotchStyles.container}>
            <TouchableOpacity style={TopNotchStyles.profileButton}>
                <Avatar
                    size={36}
                    rounded
                    icon={{name: "person", type: "ionicon"}}
                    containerStyle={TopNotchStyles.icon}
                />
                <View style={TopNotchStyles.name}>
                    <Text style={TopNotchStyles.text}>Charlotte</Text>
                    <Ionicons name={"chevron-forward-outline"} size={14} color={ColorPallet.foreground}/>
                </View>
            </TouchableOpacity>
            <View style={TopNotchStyles.actionsContainer}>
                <TouchableOpacity>
                    <Ionicons style={TopNotchStyles.icon} name="notifications" size={25}
                              onPress={() => navigation.navigate("Notifications")}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons style={TopNotchStyles.icon} name="qr-code" size={25}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}
