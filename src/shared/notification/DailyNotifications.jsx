import {View, Text} from "react-native";
import {NotificationCard} from "./NotificationCard";
import DailyNotificationsStyles from "../../app/styles/notifications/elements/DailyNotificationsStyles";


export function DailyNotifications({date, notifications}) {
    return (
        <View style={DailyNotificationsStyles.container}>
            <Text style={DailyNotificationsStyles.title}>{date}</Text>
            <View style={DailyNotificationsStyles.elements}>
            {notifications.map((notification, index) => (
                <NotificationCard key={index} data={notification}/>
            ))}
            </View>
        </View>
    );
}
