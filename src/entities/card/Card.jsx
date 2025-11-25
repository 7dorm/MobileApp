import {Text, TouchableOpacity, View} from "react-native";
import CardStyles from "../../app/styles/home/details/card/CardStyles";
import FogGradient from "../../features/backgroundGradient/FogGradient";
import MasterCard from "../../../assets/paymentSystem/mastercard.svg";

const typeColors = {
    "Debit": 'rgba(254,89,0, 0.9)',
    "Virtual": 'rgba(180,180,180,0.9)',
    "Credit": 'rgba(70,70,255,0.8)',
}

export const Card = ({type}) => {
    const balance = Math.round(Math.random() * Math.pow(10, Math.round(Math.abs(Math.abs(Math.random() * 10 - 6) - 2))) * 100) / 100;
    let lastFourDigit = Math.round(Math.random() * 100000).toString();
    lastFourDigit = lastFourDigit.slice(lastFourDigit.length - 4, lastFourDigit.length);
    return (
        <View>
            <TouchableOpacity style={CardStyles.cardContainer}>
                <FogGradient style={CardStyles.container} color={typeColors[type]} intensity={1}>
                    <MasterCard/>
                    <View>
                        <Text style={CardStyles.text}>${balance}</Text>
                        <View style={CardStyles.bottomTextContainer}>
                            <Text style={CardStyles.lowerText}>{type}</Text>
                            <Text style={CardStyles.lowerText}>•• {lastFourDigit}</Text>
                        </View>
                    </View>
                </FogGradient>
            </TouchableOpacity>
        </View>
    );
}
