import PageStyles from "../../app/styles/page/PageStyles";
import {Text, View} from "react-native";
import TopNotch from "../../widgets/top-notch/TopNotch";
import {Expenses} from "../../widgets/home/expenses/Expenses";
import {Services} from "../../widgets/home/services/Services";
import {Details} from "../../widgets/home/details/Details";

export default function HomePage() {
    return (
        <View style={PageStyles.container}>
            <TopNotch/>
            <Services/>
            <Details/>
            <Expenses/>
        </View>
    );
}
