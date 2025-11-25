import {Text, TouchableOpacity, View} from "react-native";
import CardStyles from "../../app/styles/card/CardStyles";
import {Ionicons} from "@expo/vector-icons";
import ColorPallet from "../../app/styles/app/ColorPallet";

export const AddCard = ({type}) => {

    return (
        <TouchableOpacity style={CardStyles.addContainer}>
            <Ionicons name={"add"} size={32} color={ColorPallet.foreground} />
        </TouchableOpacity>

    );
}
