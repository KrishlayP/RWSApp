import { Component } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { styles } from "../styles/styles";

export default class AppErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("App crashed inside React tree:", error, info);
  }

  reset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <SafeAreaView style={styles.errorContainer}>
          <View style={styles.errorCard}>
            <Text style={styles.errorTitle}>Something went wrong</Text>
            <Text style={styles.errorText}>
              Please try again. The app recovered without closing.
            </Text>
            <TouchableOpacity style={styles.errorButton} onPress={this.reset}>
              <Text style={styles.errorButtonText}>Try again</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}
