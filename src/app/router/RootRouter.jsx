import {SafeAreaView} from "react-native-safe-area-context";
import AppStyles from "../styles/app/AppStyles";
import {NavigationContainer} from "@react-navigation/native";
import HomePage from "../../pages/HomePage";
import BottomMenu from "../../widgets/bottom-menu/BottomMenu";
import {createStackNavigator} from "@react-navigation/native/src/__stubs__/createStackNavigator";
import {View} from "react-native";
import PaymentsPage from "../../pages/PaymentsPage";
import HistoryPage from "../../pages/HistoryPage";
import AnalyticsPage from "../../pages/AnalyticsPage";
import ChatsPage from "../../pages/ChatsPage";

const Stack = createStackNavigator();

export const RootRouter = () => {
    return (
        <SafeAreaView style={AppStyles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={"Home"} component={HomePage}/>
                    <Stack.Screen name={"Payments"} component={PaymentsPage}/>
                    <Stack.Screen name={"History"} component={HistoryPage}/>
                    <Stack.Screen name={"Analytics"} component={AnalyticsPage}/>
                    <Stack.Screen name={"Chats"} component={ChatsPage}/>
                </Stack.Navigator>
                <BottomMenu/>
            </NavigationContainer>

        </SafeAreaView>

    );
};
