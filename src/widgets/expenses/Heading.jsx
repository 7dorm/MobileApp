import {View, Text} from "react-native";
import {Bar} from "../../shared/ui/Bar";
import ColorPallet from "../../app/styles/app/ColorPallet";
import HeadingStyles from "../../app/styles/home/expenses/HeadingStyles";

export function Heading(props) {

    const month = "June";
    return (
        <View style={HeadingStyles.container}>
            <View className="Title" style={HeadingStyles.title}>
                <View style={HeadingStyles.textWrapper}>
                    <Text style={HeadingStyles.text}>Expenses in </Text>
                    <Text style={HeadingStyles.month}>{month}</Text>
                </View>
                <Text style={HeadingStyles.money}>$5,091</Text>
            </View>
            <View className="Bar" style={HeadingStyles.bars}>
                <Bar color={ColorPallet.colors.main} width={"35%"}/>
                <Bar color={ColorPallet.colors.secondary} width={"30%"}/>
                <Bar color={ColorPallet.colors.third} width={"25%"}/>
                <Bar color={ColorPallet.colors.fourth} width={"10%"}/>
            </View>
        </View>
    );
}
