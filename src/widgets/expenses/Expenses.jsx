import {View} from "react-native";
import {Heading} from "./Heading";
import {Sections} from "./Sections";
import ExpensesStyles from "../../app/styles/expenses/ExpensesStyles";


export function Expenses() {
    return (
        <View style={ExpensesStyles.container}>
            <Heading/>
            <Sections/>
        </View>
    );
}
