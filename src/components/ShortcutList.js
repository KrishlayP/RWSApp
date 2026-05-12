import { memo, useCallback } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { SHORTCUTS } from "../data/appData";
import { styles } from "../styles/styles";

function ShortcutList({ onOpenCategory, t }) {
  const renderItem = useCallback(
    ({ item }) => (
      <TouchableOpacity
        style={styles.shortcutItem}
        onPress={() => onOpenCategory(item.categoryId)}
      >
        <LinearGradient colors={item.colors} style={styles.shortcutCircle}>
          <Text style={styles.shortcutEmoji}>{item.icon}</Text>
        </LinearGradient>
        <Text style={styles.shortcutLabel}>{t(`shortcut_${item.id}`)}</Text>
      </TouchableOpacity>
    ),
    [onOpenCategory, t],
  );

  return (
    <FlatList
      horizontal
      data={SHORTCUTS}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.shortcutList}
      initialNumToRender={4}
      maxToRenderPerBatch={4}
      removeClippedSubviews
      windowSize={3}
    />
  );
}

export default memo(ShortcutList);
