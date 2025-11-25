import React from "react";
import { View } from "react-native";
import { useNavigationState, useNavigation } from "@react-navigation/native";
import { MenuButton } from "../../shared/ui/MenuButton";
import MenuStyles from "../../app/styles/menu/MenuStyles";

export default function BottomMenu({currentRoute}) {
    const navigation = useNavigation();

    const pages = [
        { id: "Home", icon: "home" },
        { id: "Payments", icon: "swap-horizontal" },
        { id: "History", icon: "time" },
        { id: "Analytics", icon: "pie-chart" },
        { id: "Chats", icon: "chatbubbles" },
    ];
    return (
        <View style={MenuStyles.container}>
            {pages.map(({ id, icon }) => (
                <MenuButton
                    key={id}
                    label={id}
                    icon={icon}
                    selected={currentRoute === id} // reflect current route
                    onClick={() => navigation.navigate(id)}
                />
            ))}
        </View>
    );
}
