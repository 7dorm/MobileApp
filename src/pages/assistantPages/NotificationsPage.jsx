import PageStyles from "../../app/styles/page/PageStyles";
import {FlatList, View} from "react-native";
import {NotificationHeader} from "../../widgets/notifications/NotificationHeader";
import {Tab} from "../../shared/ui/Tab";
import AppStyles from "../../app/styles/app/AppStyles";
import {useState} from "react";
import {DailyNotifications} from "../../shared/notification/DailyNotifications";

import Woman from "../../../assets/accountAvatars/woman.png";
import Travel from "../../../assets/servicesIcons/travel.svg";
import Shield from "../../../assets/servicesIcons/shield.svg";
import Payment from "../../../assets/servicesIcons/payment.svg";
const Icons = {
    woman: Woman,
    travel: Travel,
    shield: Shield,
    payment: Payment,
}

export default function NotificationsPage() {
    const tabs = [
        {title: "All"},
        {title: "Payments"},
        {title: "System"},
        {title: "Delivery"},
        {title: "Travel"}
    ]
    const data = [
        {
            date: "TODAY, 17 JUNE",
            notifications: [
                {
                    type: "Payments",
                    action: "recive",
                    user: "Anna",
                    icon: Icons.woman,
                    amount: 110,
                    card: "Debit •• 4385",
                    balance: "$4,098.12",
                    timedate: "17 June 2025, 17:49 · Payments",
                    unread: true,
                }
            ]
        },
        {
            date: "YESTERDAY, 16 JUNE",
            notifications: [
                {
                    type: "Travel",
                    icon: Icons.travel,
                    title: "See our limited offer!",
                    message: "Would you like to visit new countries? Maybe it's your time!",
                    timedate: "16 June 2025, 23:08 · Travel",
                    unread: false,
                },
                {
                    type: "Payments",
                    action: "send",
                    icon: Icons.payment,
                    user: "•• 2041",
                    amount: 14.62,
                    card: "Debit •• 4385",
                    balance: "$4,098.12",
                    timedate: "16 June 2025, 06:18 · Payments",
                    unread: false,
                }
            ]
        },
        {
            date: "24 MARCH, 2025",
            notifications: [
                {
                    type: "System",
                    icon: Icons.shield,
                    title: "New login into account",
                    message: "You have logged in from a new location: iOS 26.0.1 · 109.255.84.7 · Spain",
                    timedate: "24 March 2025, 15:44 · Security",
                    unread: false,
                }
            ]
        }
    ]
    const [currentTab, setCurrentTab] = useState("All");
    const renderDay = ({index, item}) => {
        return (<DailyNotifications date={item.date} notifications={item.notifications} />);
    }
    return (
        <View style={PageStyles.container}>
            <View style={AppStyles.tabs.container}>
                {tabs.map(({title}, index) => (
                    <Tab
                        key={index}
                        text={title}
                        selected={currentTab === title}
                        onPress={() => setCurrentTab(title)}
                    />
                ))}
            </View>
            <FlatList data={data} renderItem={renderDay} />
        </View>
    );
}
