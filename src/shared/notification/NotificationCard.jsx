import {View, Text, Image} from "react-native";
import NotificationCardStyles from "../../app/styles/notifications/elements/NotificationCardStyles";
import ColorPallet from "../../app/styles/app/ColorPallet";


export function NotificationCard({data}) {

    const renderIcon = (CIcon) => {
        if (typeof CIcon === 'number') {
            return (
                <View style={NotificationCardStyles.icon}>
                    <Image source={CIcon} style={NotificationCardStyles.icon}/>
                </View>
            );
        }
        return (
            <View style={NotificationCardStyles.icon}>
                <CIcon/>
            </View>
        );
    }

    const renderUnread = (isUnread) => {
        if (isUnread) {
            return (
                <View style={{
                    backgroundColor: ColorPallet.focus,
                    width: 6,
                    height: 6,
                    borderRadius: 50
                }}/>
            );
        }
        return (<View/>);
    }

    if (data.type === "Payments") {
        return (
            <View style={NotificationCardStyles.container}>
                {renderIcon(data.icon)}
                <View style={NotificationCardStyles.content}>
                    <Text style={NotificationCardStyles.title}>
                        {data.action === "recive" ? "Received from " : "Sent to "}{data.user}
                    </Text>
                    <Text style={NotificationCardStyles.money}>
                        {data.action === "recive" ? "+" : "-"}${data.amount}
                    </Text>
                    <View style={NotificationCardStyles.message}>
                        <Text style={NotificationCardStyles.messageText}>{data.card}</Text>
                        <Text style={NotificationCardStyles.messageText}>{data.balance}</Text>
                    </View>
                    <Text style={NotificationCardStyles.timedate}>{data.timedate}</Text>

                </View>
                <View style={{
                    width: 18,
                    height: 18,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    {renderUnread(data.unread)}
                </View>
            </View>
        );
    }
    return (
        <View style={NotificationCardStyles.container}>
            {renderIcon(data.icon)}
            <View style={NotificationCardStyles.content}>
                <Text style={NotificationCardStyles.title}>{data.title}</Text>
                <Text style={NotificationCardStyles.messageText}>{data.message}</Text>
                <Text style={NotificationCardStyles.timedate}>{data.timedate}</Text>
            </View>
            <View style={{
                width: 18,
                height: 18,
                alignItems: "center",
                justifyContent: "center"
            }}>
                {renderUnread(data.unread)}
            </View>
        </View>
    );
}
