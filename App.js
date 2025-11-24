import {useEffect, useRef, useState} from "react";
import * as Font from "expo-font";
import AppStyles from "./src/app/styles/app/AppStyles";
import {RootRouter} from "./src/app/router/RootRouter";
import {View} from "react-native";



export default function App() {

    // Fonts
    const [fontsLoaded, setFontsLoaded] = useState(false);
    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'Ionicons': require('./node_modules/react-native-vector-icons/Fonts/Ionicons.ttf'),
            });
            setFontsLoaded(true);
        }

        loadFonts();
    }, []);
    if (!fontsLoaded) {
        return null;
    }


    return (
        <View style={AppStyles.container}>
            <RootRouter/>
        </View>

    );
}
