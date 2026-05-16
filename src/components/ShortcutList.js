import { memo, useCallback, useEffect, useRef } from "react";
import { Animated, Easing, FlatList, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { SHORTCUTS } from "../data/appData";
import { styles } from "../styles/styles";
import { getFadeUpStyle, getPressScaleStyle } from "../utils/animations";

function ShortcutItem({ index, item, onOpenCategory, t }) {
  const entrance = useRef(new Animated.Value(0)).current;
  const press = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(entrance, {
      toValue: 1,
      duration: 360,
      delay: 70 + index * 50,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [entrance, index]);

  const animatePress = (toValue) => {
    Animated.spring(press, {
      toValue,
      friction: 7,
      tension: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={getFadeUpStyle(entrance, 14)}>
      <Animated.View style={getPressScaleStyle(press)}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.shortcutItem}
          onPress={() => onOpenCategory(item.categoryId)}
          onPressIn={() => animatePress(0)}
          onPressOut={() => animatePress(1)}
        >
          <LinearGradient colors={item.colors} style={styles.shortcutCircle}>
            <Text style={styles.shortcutEmoji}>{item.icon}</Text>
          </LinearGradient>
          <Text style={styles.shortcutLabel}>{t(`shortcut_${item.id}`)}</Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
}

function ShortcutList({ onOpenCategory, t }) {
  const renderItem = useCallback(
    ({ index, item }) => (
      <ShortcutItem
        index={index}
        item={item}
        onOpenCategory={onOpenCategory}
        t={t}
      />
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
