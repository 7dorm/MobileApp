// import {useState} from "react";
import {MenuButton} from "../../shared/ui/MenuButton";
import {MenuStyles} from "../../app/styles/menu/MenuStyles";
import React, {useState} from "react";
import {View} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function BottomMenu(props) {
    const [activePage, setActivePage] = useState("Home");
    const navigation = useNavigation();

    let pages = [
        {id: "Home", icon: "home"},
        {id: "Payments", icon: "swap-horizontal"},
        {id: "History", icon: "time"},
        {id: "Analytics", icon: "pie-chart"},
        {id: "Chats", icon: "chatbubbles"},
    ];

    const changeTab = (id) => {
        setActivePage(id);
        navigation.navigate(id);
        console.log(id);
    }

    return (
        <View style={MenuStyles.container}>
            {pages.map(({id, icon}) => (
                <MenuButton
                    key={id}
                    label={id}
                    icon={icon}
                    selected={activePage === id}
                    onClick={() => {changeTab(id)}}
                />
            ))}
        </View>
    );
}
