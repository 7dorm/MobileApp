import {SafeAreaView} from "react-native-safe-area-context";
import {PageStyles} from "../app/styles/page/PageStyles";
import {Text} from "react-native";

export default function ChatsPage() {
    return (
        <SafeAreaView style={PageStyles.container}>
            <Text>Chats page</Text>
            <Text>Chats page</Text>
            <Text>Chats page</Text>
        </SafeAreaView>
    );
}
