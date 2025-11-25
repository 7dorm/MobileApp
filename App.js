import RootRouter from "./src/app/router/RootRouter";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
} from '@expo-google-fonts/inter';

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
    });

    if (!fontsLoaded) return null;

    return (
        <SafeAreaProvider>
            <RootRouter/>
        </SafeAreaProvider>

    );
}
