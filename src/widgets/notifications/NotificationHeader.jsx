import {Button, Text, TouchableOpacity, View} from "react-native";
import HeaderStyles from "../../app/styles/notifications/header/HeaderStyles";
import {useNavigation} from "@react-navigation/native";
import MarkRead from "../../../assets/notificationsIcons/markRead.svg";
import {Ionicons} from "@expo/vector-icons";

export function NotificationHeader({title}) {
    const navigation = useNavigation();

    return (
        <View style={HeaderStyles.container}>
            <Ionicons name={"chevron-back-outline"} style={HeaderStyles.buttonText} onPress={() => {
                navigation.goBack()
            }}/>

            <Text style={HeaderStyles.buttonText}>{title}</Text>
            <TouchableOpacity>
                <MarkRead/>
            </TouchableOpacity>

        </View>
    );
}
