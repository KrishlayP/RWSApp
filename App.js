import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppErrorBoundary from "./src/components/AppErrorBoundary";
import "./src/localization/i18n";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <AppErrorBoundary>
          <HomeScreen />
        </AppErrorBoundary>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
