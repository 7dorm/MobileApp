import {Image, View, Text} from "react-native";
import SectionStyles from "../../app/styles/home/expenses/SectionStyles";



/*

                    avatar: "../../../assets/accountAvatars/starbucks.ico",
                    accountName: "Starbucks",
                    type: "Food",
                    time: "19:21",
                    date: "Jun 8",
                    amount: "$122.47"

 */
import starbucks from '../../../assets/accountAvatars/starbucks.png';
import netflix from '../../../assets/accountAvatars/netflix.png';
import man from '../../../assets/accountAvatars/man.png';
import ColorPallet from "../../app/styles/app/ColorPallet";

const avatars = {
    starbucks,
    netflix,
    man
};

const colorMapping = {
    "Entertainment": ColorPallet.colors.third,
    "Food": ColorPallet.colors.secondary,
    "Money Transfer": ColorPallet.colors.main,
}

export const Operation = (props) => {
    props = props.data;
    return (
        <View style={SectionStyles.container}>
            <View style={SectionStyles.section}>
                <Image source={avatars[props.avatar]} style={SectionStyles.image} resizeMode={"contain"} />
                <View style={SectionStyles.profileContainer}>
                    <Text style={SectionStyles.text}>{props.accountName}</Text>
                    <View style={SectionStyles.typeContainer}>
                        <View style={{
                            borderRadius: 50,
                            width: 6,
                            height: 6,
                            backgroundColor: colorMapping[props.type],

                        }}/>
                        <Text style={SectionStyles.bottomText}> {props.type}</Text>
                    </View>
                </View>
            </View>
            <View style={SectionStyles.section}>
                <View style={SectionStyles.moneyContainer}>
                    <Text style={SectionStyles.text}>{props.amount}</Text>
                    <Text style={SectionStyles.bottomText}>{props.date}, {props.time}</Text>
                </View>
            </View>
        </View>
    );
}
