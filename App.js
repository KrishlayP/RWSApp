import { PaperProvider } from "react-native-paper";
import AppErrorBoundary from "./src/components/AppErrorBoundary";
import "./src/localization/i18n";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <PaperProvider>
      <AppErrorBoundary>
        <HomeScreen />
      </AppErrorBoundary>
    </PaperProvider>
  );
}
