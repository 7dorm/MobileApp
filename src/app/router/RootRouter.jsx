import {SafeAreaView} from "react-native-safe-area-context";
import AppStyles from "../styles/app/AppStyles";
import {NavigationContainer, useNavigationContainerRef} from "@react-navigation/native";
import HomePage from "../../pages/mainPages/HomePage";
import BottomMenu from "../../widgets/bottom-menu/BottomMenu";
import {View} from "react-native";
import PaymentsPage from "../../pages/mainPages/PaymentsPage";
import HistoryPage from "../../pages/mainPages/HistoryPage";
import AnalyticsPage from "../../pages/mainPages/AnalyticsPage";
import ChatsPage from "../../pages/mainPages/ChatsPage";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import NotificationsPage from "../../pages/headerPages/NotificationsPage";
import {useState} from "react";
import {Header} from "../../widgets/notifications/Header";

const Stack = createNativeStackNavigator();

export default () => {
    const [currentRoute, setCurrentRoute] = useState(null);
    const navigationRef = useNavigationContainerRef();
    return (
        <SafeAreaView style={AppStyles.container}>
            <NavigationContainer
                ref={navigationRef}
                onReady={() => setCurrentRoute(navigationRef.getCurrentRoute()?.name)}
                onStateChange={() =>
                    setCurrentRoute(navigationRef.getCurrentRoute()?.name)
                }
            >
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Group screenOptions={{
                        headerShown: false,
                        animation: 'none'
                    }}>
                        <Stack.Screen name={"Home"} component={HomePage}/>
                        <Stack.Screen name={"Payments"} component={PaymentsPage}/>
                        <Stack.Screen name={"History"} component={HistoryPage}/>
                        <Stack.Screen name={"Analytics"} component={AnalyticsPage}/>
                        <Stack.Screen name={"Chats"} component={ChatsPage}/>
                    </Stack.Group>
                    <Stack.Group screenOptions={{
                        headerShown: true
                    }}>
                        <Stack.Screen
                            name={"Notifications"}
                            component={NotificationsPage}
                            options={{
                                title: "Notifications",
                                header: (props) => (<Header title={"Notifications"} />)
                            }}
                        />
                    </Stack.Group>
                </Stack.Navigator>

                <BottomMenu currentRoute={currentRoute}/>
            </NavigationContainer>

        </SafeAreaView>

    );
};
